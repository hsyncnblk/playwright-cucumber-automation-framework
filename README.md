# 🚀 Enterprise Test Automation Framework (Playwright & Cucumber)

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)

> **"Kalite bir eylem değil, bir alışkanlıktır."** – Aristotle

Bu proje, modern web uygulamaları için **ölçeklenebilir**, **sürdürülebilir** ve **SOLID prensiplerine** sadık bir test otomasyon mimarisi örneğidir. E-Ticaret senaryolarını simüle ederek, UI etkileşimlerini Backend (API/DB) doğrulamalarıyla birleştiren **Hibrit Test Yaklaşımını** sergiler.

---

## 🏗️ Mimari ve Tasarım Desenleri

Bu framework, endüstri standartlarındaki en iyi pratikler (Best Practices) kullanılarak tasarlanmıştır:

* **Page Object Model (POM):** Kod tekrarını önlemek ve bakımı kolaylaştırmak için her sayfa kendi sınıfına ayrılmıştır.
* **Behavior Driven Development (BDD):** Gherkin sözdizimi ile teknik olmayan paydaşların da anlayabileceği "Yaşayan Dokümantasyon" (Living Documentation).
* **SOLID Prensipleri:**
    * *Single Responsibility:* API servisleri ve UI sayfa objeleri birbirinden ayrılmıştır.
    * *Open/Closed:* `BasePage` yapısı ile yeni özellikler mevcut kodu bozmadan eklenebilir.
* **Hybrid Testing Strategy:** Kritik işlemlerde (Örn: Sipariş tamamlama) sadece UI mesajına güvenilmez; arka planda API/DB simülasyonu ile veri bütünlüğü doğrulanır.

---

## 📂 Proje Yapısı

```text
src/
├── api/             # 🧠 Backend/DB Simülasyon Servisleri
├── features/        # 📝 Gherkin (.feature) Senaryo Dosyaları
├── pages/           # 📱 Page Object Model (UI Katmanı)
│   ├── BasePage.ts  #    Miras alınan ana yapı
│   └── ...
├── steps/           # 🔗 Step Definitions (Feature ve Code arasındaki köprü)
├── support/         # ⚙️ Konfigürasyon, Hooks ve Custom World
│   ├── hooks.ts     #    Screenshot on Failure & Browser Management
│   └── custom-world.ts # Context Yönetimi
└── utils/           # 🛠️ Yardımcı Fonksiyonlar
