# FOG İstanbul - Next.js Migration

## 🚨 Migration Status: IN PROGRESS

Vite projesinden Next.js App Router'a **%100 orijinal inline styles** ile migration yapılıyor.

### Yaklaşım:
- ❌ Tailwind CSS kullanmıyoruz
- ✅ Orijinal inline styles birebir kopyalanıyor
- ✅ react-router → Next.js routing
- ✅ Sadece zorunlu değişiklikler (import paths, Link, Image)

### Tamamlanan:
- [ ] Homepage (1330 satır - devam ediyor)
- [ ] Blog (liste + post)
- [ ] Hakkımızda
- [ ] Hizmetler (9 sayfa)
- [ ] Portfolyo
- [ ] İletişim
- [ ] Legal sayfalar

**Not:** Inline styles ile migration uzun sürecek çünkü tüm 1300+ satırlık sayfalar birebir kopyalanıyor.
