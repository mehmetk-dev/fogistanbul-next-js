/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import { team, offices } from '@/app/hakkimizda/_data/hakkimizdaData';
import styles from './TeamSection.module.css';

export default function TeamSection() {
    const [activeMember, setActiveMember] = useState<number | null>(null);

    return (
        <section className={styles.teamSection}>
            <div className={styles.teamContainer}>

                {/* LEFT: TEAM LIST */}
                <div className={styles.teamWrapper}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionHeaderTitle}>EKİP</h2>
                        <span className={styles.sectionHeaderSubtitle}>( ÇEKİRDEK KADRO )</span>
                    </div>
                    <div className={styles.teamList}>
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className={`${styles.teamMember} ${activeMember === i ? styles.teamMemberActive : ''}`}
                                onClick={() => setActiveMember(activeMember === i ? null : i)}
                            >
                                <span className={styles.memberName}>{member.name}</span>
                                <span className={styles.memberRole}>{member.role}</span>
                                <div className={styles.memberImgBox}>
                                    <img src={member.img} alt={member.name} className={styles.memberImg} loading="lazy" width="120" height="160" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: OFFICES */}
                <div className={styles.officesGrid}>
                    {offices.map((office, i) => (
                        <div key={i} className={styles.officeCard}>
                            <div className={styles.officeImg}>
                                <img src={office.img} alt={office.name} className={styles.officeImgContent} loading="lazy" />
                            </div>
                            <div className={styles.officeLabel}>{office.name}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
