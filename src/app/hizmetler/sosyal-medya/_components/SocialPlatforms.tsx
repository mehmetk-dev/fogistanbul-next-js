"use client";
import styles from './SocialPlatforms.module.css';

export default function SocialPlatforms() {
    return (
        <section className={`platform-section ${styles.platformSection}`}>
            <h2 className={styles.heading}>
                HER PLATFORMDA <span className={styles.headingHighlight}>GÜÇLÜ DURUŞ.</span>
            </h2>

            <div className={styles.platformShowcase}>
                {/* 1. TIKTOK */}
                <div className={`${styles.socialCard} ${styles.tiktokCard}`}>
                    <div className={styles.tiktokCardContent}>
                        <div className={styles.tiktokOverlay}></div>
                        <div className={styles.tiktokContentText}>
                            <div className={styles.tiktokUsername}>@markaniz</div>
                            <div className={styles.tiktokDescription}>Viral içerik stratejisi ile milyonlara ulaşın. #kesfet #fyp</div>
                            <div className={styles.tiktokMusicInfo}>
                                <span className={`material-symbols-outlined ${styles.tiktokMusicIcon}`}>music_note</span> Orjinal Ses - Markanız
                            </div>
                        </div>
                        <div className={styles.tiktokUi}>
                            <div className={styles.ttIconCol}>
                                <div className={styles.ttIconBg}>
                                    <span className={`material-symbols-outlined ${styles.ttIconRed}`}>favorite</span>
                                </div>
                                <span className={styles.ttIconText}>24.5K</span>
                            </div>
                            <div className={styles.ttIconCol}>
                                <div className={styles.ttIconBg}>
                                    <span className="material-symbols-outlined">mode_comment</span>
                                </div>
                                <span className={styles.ttIconText}>842</span>
                            </div>
                            <div className={styles.ttIconCol}>
                                <div className={styles.ttIconBg}>
                                    <span className="material-symbols-outlined">bookmark</span>
                                </div>
                                <span className={styles.ttIconText}>1.2K</span>
                            </div>
                            <div className={styles.ttIconCol}>
                                <div className={styles.ttIconBg}>
                                    <span className="material-symbols-outlined">share</span>
                                </div>
                                <span className={styles.ttIconText}>Paylaş</span>
                            </div>
                        </div>
                        <div className={styles.ttSpinDisk}></div>
                    </div>
                </div>

                {/* 2. INSTAGRAM */}
                <div className={`${styles.socialCard} ${styles.instaCard}`}>
                    <div className={styles.scHeader}>
                        <div className={styles.scProfilePic}></div>
                        <div className={styles.scHeaderInfo}>
                            <div className={styles.scHeaderName}>
                                Markanız <span className={`material-symbols-outlined ${styles.scHeaderVerified}`}>verified</span>
                            </div>
                            <div className={styles.scHeaderLocation}>İstanbul</div>
                        </div>
                        <span className="material-symbols-outlined">more_horiz</span>
                    </div>
                    <div className={styles.scContent}>
                        <div className={styles.heartAnimContainer}>
                            <span className={`material-symbols-outlined ${styles.heartAnim} ${styles.heart1}`}>favorite</span>
                            <span className={`material-symbols-outlined ${styles.heartAnim} ${styles.heart2}`}>favorite</span>
                        </div>
                    </div>
                    <div className={styles.scActions}>
                        <div className={styles.scIcons}>
                            <span className={`material-symbols-outlined ${styles.scIconRed}`}>favorite</span>
                            <span className="material-symbols-outlined">mode_comment</span>
                            <span className="material-symbols-outlined">send</span>
                        </div>
                        <span className="material-symbols-outlined">bookmark</span>
                    </div>
                    <div className={styles.scPostInfo}>
                        <div className={styles.scLikes}>1,245 beğenme</div>
                        <div className={styles.scCaption}>
                            <span className={styles.scCaptionBold}>markanız</span> Premium içerik yönetimi ile markanızın değerini artırın. 🚀 <span className={styles.scCaptionHashtag}>#socialmedia #agency</span>
                        </div>
                        <div className={styles.scViewComments}>Tüm 42 yorumu gör</div>
                    </div>
                </div>

                {/* 3. FACEBOOK */}
                <div className={`${styles.socialCard} ${styles.fbCard}`}>
                    <div className={styles.fbHeader}>
                        <div className={styles.fbProfile}>
                            <div className={styles.fbProfileOnline}></div>
                        </div>
                        <div className={styles.fbHeaderInfo}>
                            <div className={styles.fbHeaderName}>Markanız</div>
                            <div className={styles.fbHeaderMeta}>
                                Sponsorlu • <span className={`material-symbols-outlined ${styles.fbHeaderMetaIcon}`}>public</span>
                            </div>
                        </div>
                        <span className={`material-symbols-outlined ${styles.fbHeaderMore}`}>more_horiz</span>
                    </div>
                    <div className={styles.fbPostText}>
                        Platformlara özel içerik stratejileri ve profesyonel yönetim ile markanızı bir adım öne taşıyın. 🚀
                    </div>
                    <div className={styles.fbContent}></div>
                    <div className={styles.fbStats}>
                        <span>👍 1.2B</span>
                        <span>542 Yorum • 120 Paylaşım</span>
                    </div>
                    <div className={styles.fbFooter}>
                        <div className={styles.fbBtn}>
                            <span className="material-symbols-outlined">thumb_up</span> Beğen
                        </div>
                        <div className={styles.fbBtn}>
                            <span className="material-symbols-outlined">chat_bubble_outline</span> Yorum Yap
                        </div>
                        <div className={styles.fbBtn}>
                            <span className="material-symbols-outlined">share</span> Paylaş
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
