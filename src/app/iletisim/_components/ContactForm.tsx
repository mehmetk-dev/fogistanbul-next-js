"use client";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '@/app/iletisim/_data/iletisimData';
import { useToast } from '@/components/Toast';
import { logClientError } from '@/lib/monitoring.client';
import styles from './ContactForm.module.css';

interface ContactFormProps {
    onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { showSuccess, showError } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        user_email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (!value.startsWith('90')) {
            if (value.startsWith('0')) value = '9' + value;
            else value = '90' + value;
        }
        let formattedValue = '+90 ';
        if (value.length > 2) formattedValue += value.substring(2, 5);
        if (value.length >= 5) formattedValue += ' ' + value.substring(5, 8);
        if (value.length >= 8) formattedValue += ' ' + value.substring(8, 10);
        if (value.length >= 10) formattedValue += ' ' + value.substring(10, 12);
        setFormData(prev => ({ ...prev, phone: formattedValue }));
    };

    const validate = () => {
        const newErrors: Record<string, boolean> = {};
        if (!formData.name.trim()) newErrors.name = true;
        if (!formData.user_email.trim()) newErrors.user_email = true;
        if (formData.user_email && !/\S+@\S+\.\S+/.test(formData.user_email)) newErrors.user_email = true;
        if (!formData.message.trim()) newErrors.message = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null); // Clear previous errors

        if (validate()) {
            setIsLoading(true);

            if (form.current) {
                // Debug: Log EmailJS config (only in development)
                if (process.env.NODE_ENV === 'development') {
                    console.log('📧 EmailJS Config:', {
                        SERVICE_ID: EMAIL_CONFIG.SERVICE_ID,
                        TEMPLATE_ID: EMAIL_CONFIG.TEMPLATE_ID,
                        PUBLIC_KEY: EMAIL_CONFIG.PUBLIC_KEY ? `${EMAIL_CONFIG.PUBLIC_KEY.substring(0, 4)}...` : 'MISSING',
                    });
                }

                emailjs.sendForm(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, form.current, EMAIL_CONFIG.PUBLIC_KEY)
                    .then(() => {
                        showSuccess('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                        onSuccess();
                        setFormData({ name: '', user_email: '', phone: '', message: '' });
                        setSubmitError(null);
                    }, (error) => {
                        // Log error to monitoring service
                        const errorDetails = {
                            text: typeof error === 'object' && 'text' in error ? error.text : String(error),
                            status: typeof error === 'object' && 'status' in error ? error.status : undefined,
                            fullError: error,
                        };

                        // Debug: Log full error in development
                        if (process.env.NODE_ENV === 'development') {
                            console.error('❌ EmailJS Error:', errorDetails);
                            console.error('EmailJS Config:', EMAIL_CONFIG);
                        }

                        logClientError(
                            error instanceof Error ? error : new Error('EmailJS submission failed'),
                            {
                                tags: {
                                    component: 'ContactForm',
                                    service: 'EmailJS',
                                },
                                extra: errorDetails,
                            }
                        );
                        
                        // More specific error messages based on error type
                        let errorMessage = 'Mesajınız gönderilirken bir hata oluştu.';
                        
                        if (typeof error === 'object' && 'status' in error) {
                            const status = error.status as number;
                            if (status === 400) {
                                errorMessage = 'Geçersiz form verisi. Lütfen tüm alanları kontrol edin.';
                            } else if (status === 403) {
                                errorMessage = 'EmailJS yetkilendirme hatası. Lütfen yöneticiye bildirin.';
                            } else if (status === 404) {
                                errorMessage = 'EmailJS servisi bulunamadı. Lütfen yöneticiye bildirin.';
                            }
                        }
                        
                        errorMessage += ' Lütfen daha sonra tekrar deneyin veya doğrudan info@fogistanbul.com adresine e-posta gönderebilirsiniz.';
                        
                        setSubmitError(errorMessage);
                        showError(errorMessage, 7000);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            }
        }
    };

    return (
        <div className={styles.formContainer} id="contact-form-section">
            <form 
                ref={form} 
                onSubmit={handleSubmit} 
                className={styles.shardForm} 
                noValidate 
                autoComplete="off"
                aria-label="İletişim Formu"
            >

                {/* Name Input */}
                <div className={`${styles.shardWrapper} ${styles.shardWrapperDelay1} ${focusedField === 'name' ? styles.shardWrapperActive : ''} ${errors.name ? styles.shardWrapperError : ''}`}>
                    <label htmlFor="contact-name">
                        ADINIZ SOYADINIZ {errors.name && <span className={styles.errBadge} aria-label="Bu alan zorunludur">GEREKLİ</span>}
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Kimsiniz?"
                        aria-required="true"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                        <span id="name-error" className="sr-only">
                            Adınız ve soyadınız gereklidir
                        </span>
                    )}
                    <div className={styles.glowBorder} aria-hidden="true"></div>
                </div>

                {/* Phone Input */}
                <div className={`${styles.shardWrapper} ${styles.shardWrapperDelay2} ${focusedField === 'phone' ? styles.shardWrapperActive : ''}`}>
                    <label htmlFor="contact-phone">TELEFON (İSTEĞE BAĞLI)</label>
                    <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onFocus={() => {
                            setFocusedField('phone');
                            if (!formData.phone) setFormData(prev => ({ ...prev, phone: '+90 5' }));
                        }}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+90 5XX ..."
                        maxLength={17}
                        aria-required="false"
                        autoComplete="tel"
                    />
                    <div className={styles.glowBorder} aria-hidden="true"></div>
                </div>

                {/* Email Input */}
                <div className={`${styles.shardWrapper} ${styles.shardWrapperDelay3} ${focusedField === 'user_email' ? styles.shardWrapperActive : ''} ${errors.user_email ? styles.shardWrapperError : ''}`}>
                    <label htmlFor="contact-email">
                        E-POSTA ADRESİNİZ {errors.user_email && <span className={styles.errBadge} aria-label="Geçersiz e-posta adresi">GEÇERSİZ</span>}
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('user_email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Size nasıl ulaşalım?"
                        aria-required="true"
                        aria-invalid={errors.user_email ? 'true' : 'false'}
                        aria-describedby={errors.user_email ? 'email-error' : undefined}
                        autoComplete="email"
                    />
                    {errors.user_email && (
                        <span id="email-error" className="sr-only">
                            Geçerli bir e-posta adresi giriniz
                        </span>
                    )}
                    <div className={styles.glowBorder} aria-hidden="true"></div>
                </div>

                {/* Message Input */}
                <div className={`${styles.shardWrapper} ${styles.shardWrapperLarge} ${styles.shardWrapperDelay4} ${focusedField === 'message' ? styles.shardWrapperActive : ''} ${errors.message ? styles.shardWrapperError : ''}`}>
                    <label htmlFor="contact-message">
                        MESAJINIZ {errors.message && <span className={styles.errBadge} aria-label="Bu alan zorunludur">GEREKLİ</span>}
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Aklınızdan geçenler..."
                        rows={4}
                        aria-required="true"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                        <span id="message-error" className="sr-only">
                            Mesaj alanı gereklidir
                        </span>
                    )}
                    <div className={styles.glowBorder} aria-hidden="true"></div>
                </div>

                {/* Submit Error Message */}
                {submitError && (
                    <div 
                        role="alert"
                        aria-live="assertive"
                        style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            background: 'rgba(220, 38, 38, 0.1)',
                            border: '1px solid rgba(220, 38, 38, 0.3)',
                            borderRadius: '8px',
                            color: '#fca5a5',
                            fontSize: '0.9rem',
                            lineHeight: 1.5,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', flexShrink: 0 }} aria-hidden="true">
                            error
                        </span>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.25rem', color: '#ef4444' }}>
                                Gönderim Hatası
                            </strong>
                            {submitError}
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className={styles.btnContainer}>
                    <span className={styles.btnLabel} aria-hidden="true">{isLoading ? 'GÖNDERİLİYOR...' : 'GÖNDERİMİ BAŞLAT'}</span>
                    {isLoading ? (
                        <div style={{ 
                            width: '20px', 
                            height: '20px', 
                            border: '2px solid rgba(237, 109, 143, 0.3)',
                            borderTopColor: '#ed6d8f',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite',
                            flexShrink: 0
                        }} aria-hidden="true"></div>
                    ) : (
                        <span className={`material-symbols-outlined ${styles.arrowIcon}`} aria-hidden="true">trending_flat</span>
                    )}
                    <button 
                        className={styles.pushBtn} 
                        type="submit" 
                        disabled={isLoading}
                        aria-label={isLoading ? 'Mesaj gönderiliyor, lütfen bekleyin' : 'Formu gönder'}
                        aria-busy={isLoading}
                    >
                        <span className={styles.pushBtnBack} aria-hidden="true"></span>
                        <span className={styles.pushBtnFront} aria-hidden="true"></span>
                    </button>
                </div>

            </form>
        </div>
    );
}
