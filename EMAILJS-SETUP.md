# EmailJS Kurulum Rehberi

## Sorun: EmailJS Çalışmıyor

EmailJS'nin çalışmamasının birkaç nedeni olabilir. Bu rehber ile sorunu çözebilirsiniz.

## 1. EmailJS Hesabı Oluşturma

1. [EmailJS](https://www.emailjs.com/) sitesine gidin ve ücretsiz hesap oluşturun
2. Dashboard'a giriş yapın

## 2. Email Service Oluşturma

1. Dashboard'da **"Email Services"** sekmesine gidin
2. **"Add New Service"** butonuna tıklayın
3. Email sağlayıcınızı seçin (Gmail, Outlook, vb.)
4. Servisi bağlayın ve **Service ID**'yi not edin (örn: `service_xjrcrfa`)

## 3. Email Template Oluşturma

1. **"Email Templates"** sekmesine gidin
2. **"Create New Template"** butonuna tıklayın
3. Template'i düzenleyin:
   - **To Email**: Mesajların gönderileceği e-posta adresi
   - **Subject**: `{{name}} - İletişim Formu`
   - **Content**: 
     ```
     İsim: {{name}}
     E-posta: {{user_email}}
     Telefon: {{phone}}
     
     Mesaj:
     {{message}}
     ```
4. **Template ID**'yi not edin (örn: `template_0p7q584`)

## 4. Public Key Alma

1. **"Account"** sekmesine gidin
2. **"General"** altında **"API Keys"** bölümünü bulun
3. **"Public Key"** değerini kopyalayın (örn: `lcdMSlXalekcIdzW5`)

## 5. Environment Variables Ekleme

`.env.local` dosyanıza şu değişkenleri ekleyin:

```env
# EmailJS Configuration
EMAILJS_SERVICE_ID=service_xjrcrfa
EMAILJS_TEMPLATE_ID=template_0p7q584
EMAILJS_PUBLIC_KEY=lcdMSlXalekcIdzW5
```

**ÖNEMLİ**: 
- `.env.local` dosyası git'e commit edilmez (güvenlik için)
- Değerleri kendi EmailJS hesabınızdan alın
- Development ve Production için farklı değerler kullanabilirsiniz

## 6. Dev Server'ı Yeniden Başlatma

Environment variable'ları ekledikten sonra dev server'ı yeniden başlatın:

```bash
# Ctrl+C ile durdurun, sonra:
npm run dev
```

## 7. Test Etme

1. İletişim sayfasına gidin (`/iletisim`)
2. Formu doldurun ve gönderin
3. Browser console'u açın (F12) ve hata mesajlarını kontrol edin
4. Development modunda EmailJS config bilgileri console'da görünecektir

## Hata Ayıklama

### Hata: "Invalid public key"
- Public Key'in doğru kopyalandığından emin olun
- EmailJS dashboard'dan yeni bir Public Key oluşturmayı deneyin

### Hata: "Service not found"
- Service ID'nin doğru olduğundan emin olun
- EmailJS dashboard'da servisin aktif olduğunu kontrol edin

### Hata: "Template not found"
- Template ID'nin doğru olduğundan emin olun
- Template'in aktif olduğunu kontrol edin

### Form gönderiliyor ama e-posta gelmiyor
- EmailJS dashboard'da **"Logs"** sekmesini kontrol edin
- E-posta sağlayıcınızın spam klasörünü kontrol edin
- Template'deki e-posta adresinin doğru olduğundan emin olun

## Production Deployment

Production'da environment variable'ları hosting sağlayıcınızın (Vercel, Netlify, vb.) dashboard'undan ekleyin:

1. Hosting dashboard'a gidin
2. Project Settings > Environment Variables
3. EmailJS değişkenlerini ekleyin
4. Deploy'u yeniden başlatın

## Alternatif: Hardcoded Değerler (Güvenlik Riski!)

⚠️ **ÖNERİLMEZ**: Eğer environment variable kullanmak istemiyorsanız, `src/app/iletisim/_data/iletisimData.ts` dosyasındaki fallback değerleri güncelleyebilirsiniz. Ancak bu Public Key'in client-side'da görünür olmasına neden olur.

```typescript
export const EMAIL_CONFIG = {
    SERVICE_ID: 'service_xjrcrfa',      // Kendi Service ID'nizi yazın
    TEMPLATE_ID: 'template_0p7q584',    // Kendi Template ID'nizi yazın
    PUBLIC_KEY: 'lcdMSlXalekcIdzW5'     // Kendi Public Key'inizi yazın
};
```

## İletişim

Sorun devam ederse:
- EmailJS dokümantasyonu: https://www.emailjs.com/docs/
- Browser console'daki hata mesajlarını kontrol edin
- EmailJS dashboard'daki Logs sekmesini kontrol edin
