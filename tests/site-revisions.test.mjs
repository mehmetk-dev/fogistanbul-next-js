import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('FOG is positioned as a digital transformation agency', async () => {
  const [layout, homePage] = await Promise.all([
    source('src/app/layout.tsx'),
    source('src/app/page.tsx'),
  ]);

  assert.match(layout, /FOG İstanbul \| Dijital Dönüşüm Ajansı/);
  assert.match(
    homePage,
    /title:\s*\{\s*absolute:\s*'FOG İstanbul \| Dijital Dönüşüm Ajansı'/s,
  );
  assert.doesNotMatch(`${layout}\n${homePage}`, /Yeni Nesil Dijital Ajans/);
});

test('about page uses the approved hero, manifesto, vision, mission and values copy', async () => {
  const [hero, manifesto] = await Promise.all([
    source('src/app/hakkimizda/_components/HeroSection.tsx'),
    source('src/app/hakkimizda/_components/ManifestoSection.tsx'),
  ]);

  assert.match(hero, /markanızı Bilgi Çağı&apos;na taşır, yeni nesil dijital çözümler sunar/i);
  assert.doesNotMatch(manifesto, /İster bir KOBİ/);
  assert.match(manifesto, /Lafı uzatmıyor, büyümenize odaklanıyoruz!/);
  assert.match(manifesto, /dijital dünyaya adaptasyonunu sağlamak/);
  assert.match(manifesto, /dijitalleşme süreçlerini kolaylaştırmak/);
  assert.match(manifesto, /İş ortaklarımıza %100 şeffaflık sunmak/);
});

test('team section and team claims are removed from the about page', async () => {
  const [client, metadata, data] = await Promise.all([
    source('src/app/hakkimizda/HakkimizdaClient.tsx'),
    source('src/app/hakkimizda/page.tsx'),
    source('src/app/hakkimizda/_data/hakkimizdaData.ts'),
  ]);

  assert.doesNotMatch(client, /TeamSection/);
  assert.doesNotMatch(metadata, /Ekibimiz|['"]ekip['"]/);
  assert.doesNotMatch(data, /export const team/);
});

test('social media and web design descriptions use the revised benefits', async () => {
  const [services, socialHero, webHero] = await Promise.all([
    source('src/app/hizmetler/_data/hizmetlerData.ts'),
    source('src/app/hizmetler/sosyal-medya/_components/SocialHero.tsx'),
    source('src/app/hizmetler/web-tasarim/_components/WebHero.tsx'),
  ]);

  assert.match(services, /Firmanızı veya markanızı doğru hedef kitleye duyuran/);
  assert.match(services, /Site ziyaretçilerine kullanım kolaylığı sunan/);
  assert.match(socialHero, /Firmanızı veya markanızı doğru hedef kitleye duyuruyor/);
  assert.match(webHero, /ziyaretçilerine kullanım kolaylığı sunan/);
});

test('digital marketing visual grows from traffic to sales', async () => {
  const styles = await source('src/app/hizmetler/dijital-pazarlama/_components/DigitalFunnel.module.css');

  assert.match(styles, /\.lTraffic\s*\{[^}]*width:\s*65%/s);
  assert.match(styles, /\.lLeads\s*\{[^}]*width:\s*85%/s);
  assert.match(styles, /\.lSales\s*\{[^}]*width:\s*100%/s);
});

test('contact form has a clear text submit action', async () => {
  const form = await source('src/app/iletisim/_components/ContactForm.tsx');

  assert.match(form, />\s*Mesajımı Gönder\s*</);
  assert.doesNotMatch(form, /pushBtnBack|pushBtnFront/);
});

test('placeholder portfolio claims are not published as customer work', async () => {
  const [home, data, portfolio] = await Promise.all([
    source('src/app/HomeClient.tsx'),
    source('src/app/portfoy/_data/portfoyData.ts'),
    source('src/app/portfoy/PortfoyClient.tsx'),
  ]);

  assert.doesNotMatch(home, /PortfolioSection/);
  assert.doesNotMatch(data, /images\.unsplash\.com|Vogue Moda|Nova FinTech|Coffee Lab/);
  assert.match(portfolio, /Gerçek proje içeriklerimizi hazırlıyoruz/);
});

test('home animations wait for browser hydration before mutating class names', async () => {
  const home = await source('src/app/HomeClient.tsx');

  assert.match(home, /window\.addEventListener\('load', markAnimationsReady/);
  assert.match(home, /if \(!animationsReady\) return;/);
  assert.match(home, /\[animationsReady, checkInitialVisibility\]/);
});

test('blog shows a preparing state only when no posts exist', async () => {
  const grid = await source('src/app/blog/_components/BlogGrid.tsx');

  assert.match(grid, /totalPosts === 0/);
  assert.match(grid, /Blog hazırlanıyor/);
  assert.match(grid, /Aradığınız blog yazısı bulunamadı/);
});
