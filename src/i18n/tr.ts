import type { Dict } from './en';

export const tr: Dict = {
  meta: {
    landingTitle: 'Seklio — İnternete ihtiyaç duymayan mesajlaşma',
    landingDescription:
      'Seklio sunucusuz bir mesh mesajlaşma uygulamasıdır. Yakındaki telefonlar Bluetooth ve Wi-Fi üzerinden bağlanır, uçtan uca şifreli mesajları cihazdan cihaza iletir. Sunucu yok, hesap yok, telefon numarası yok.',
    faqTitle: 'SSS — Seklio',
    faqDescription: 'Sunucusuz mesh mesajlaşma uygulaması Seklio hakkında sıkça sorulan sorular.',
    privacyTitle: 'Gizlilik Politikası — Seklio',
    privacyDescription: 'Seklio’nun gizlilik politikası: sunucu yok, dolayısıyla toplanacak bir şey de yok.',
    supportTitle: 'Destek — Seklio',
    supportDescription: 'Seklio için yardım: SSS, hata bildirimi ve iletişim.',
  },

  nav: {
    features: 'Özellikler',
    howItWorks: 'Nasıl çalışır',
    faq: 'SSS',
    support: 'Destek',
    download: 'Betaya katıl',
  },

  hero: {
    badge: 'İnternet gerekmez',
    title: 'İnternete ihtiyaç duymayan mesajlaşma.',
    subtitle:
      'Seklio, yakındaki telefonları Bluetooth ve Wi-Fi üzerinden doğrudan birbirine bağlar; mesajlarınız cihazdan cihaza örülen bir ağ üzerinden taşınır. Sunucu yok, hesap yok, telefon numarası yok — ve her şey uçtan uca şifreli.',
    ctaIos: 'iOS betasına katıl',
    ctaAndroid: 'Android APK indir',
    note: 'Ücretsiz · iOS açık betası TestFlight’ta · Android çok yakında',
  },

  comingSoon: 'Çok yakında',

  how: {
    title: 'Nasıl çalışır',
    subtitle: 'Üç fikir, sıfır altyapı.',
    steps: [
      {
        title: 'Telefonlar birbirini yakında bulur',
        body:
          'Seklio, çevrenizdeki telefonları Bluetooth LE ve yerel Wi-Fi üzerinden keşfeder. SIM gerekmez, çekim gerekmez, kurulum gerekmez — yakındaysanız bağlısınız.',
      },
      {
        title: 'Mesajlar cihazdan cihaza seker',
        body:
          'Seklio çalıştıran her telefon, mühürlü zarfları bir sonrakine iletir. Mesajlarınız telefondan telefona seke seke, doğrudan menzil dışındaki arkadaşlarınıza bile ulaşır — mesh dediğimiz şey bu.',
      },
      {
        title: 'Yalnızca alıcı okuyabilir',
        body:
          'Mesajlar telefonunuzdan çıkmadan önce uçtan uca şifrelenir. Onları taşıyan telefonlar yalnızca şifreli veri görür — sözlerinizi asla.',
      },
    ],
  },

  features: {
    title: 'Gizlilik için kuruldu, insanlar için yapıldı',
    subtitle: 'Bir mesajlaşma uygulamasının ihtiyacı olan her şey — genelde gerektirdiği altyapının hiçbiri olmadan.',
    items: [
      {
        icon: 'lock',
        title: 'Uçtan uca şifreli',
        body: 'Modern ve kanıtlanmış kriptografi — Ed25519 imzaları, X25519 anahtar anlaşması, ChaCha20-Poly1305 şifrelemesi — her mesajı mühürler.',
      },
      {
        icon: 'id',
        title: 'Hesap yok, numara yok',
        body: 'Kimliğiniz telefonunuzda üretilen bir anahtar çiftidir. Telefon numarası yok, e-posta yok, kayıt yok — bir kullanıcı adı seçin ve başlayın.',
      },
      {
        icon: 'offline',
        title: 'Çekim olmadan çalışır',
        body: 'Kalabalık etkinlikler, kampüsler, uçuşlar, dağ başları, elektrik kesintileri — şebekenin yetmediği her yerde mesh çalışmaya devam eder.',
      },
      {
        icon: 'clock',
        title: 'Sonra da teslim eder',
        body: 'Arkadaşınız menzil dışındaysa şifreli mesajınız bekler ve onunla karşılaşan telefonlar üzerinden yola devam eder — 7 güne kadar.',
      },
      {
        icon: 'circles',
        title: 'Çevreler',
        body: 'QR kodla davet edilen özel şifreli gruplar. Anahtar yalnızca davetli üyelerde — aradaki cihazlar içeriyi göremez.',
        soon: true,
      },
      {
        icon: 'megaphone',
        title: 'Duyurular',
        body: 'Menzildeki herkese tek seferde seslenin — imzalı olduğu için alıcılar mesajın gerçekten sizden geldiğini bilir.',
      },
      {
        icon: 'photo',
        title: 'Fotoğraflar, şifreli',
        body: 'Fotoğrafları uçtan uca şifreli paylaşın; yakındayken Wi-Fi hızlı şeridi, değilken sabırlı parça parça teslimat.',
      },
      {
        icon: 'qr',
        title: 'Yüz yüze doğrulayın',
        body: 'Arkadaşınızın QR kodunu okutarak gerçekten o olduğunu doğrulayın. Doğrulama karşılıklıdır, kişiseldir ve asla bir sunucudan geçmez.',
      },
    ],
  },

  privacy: {
    title: 'Toplanacak bir şey yok. Toplanacak bir yer de yok.',
    body:
      'Seklio’da sunucu, analitik ya da kullanıcı veritabanı yoktur — sizi izlemesi beklenen altyapı burada hiç var olmadı.',
    points: [
      'Mesajlar yalnızca sizin ve alıcının telefonunda yaşar.',
      'Kimliğiniz cihazınızdan asla çıkmaz — bir profil değil, bir anahtardır.',
      'Takip yok, reklam yok, veri paylaşımı yok. Paylaşılacak bir şey yok.',
    ],
    link: 'Gizlilik politikasını okuyun',
  },

  download: {
    title: 'Betayı deneyin',
    subtitle: 'Seklio her iki platformda da açık betada.',
    iosTitle: 'iOS',
    iosBody: 'TestFlight üzerinden açık beta. TestFlight uygulamasını kurun, tek dokunuşla katılın.',
    iosCta: 'TestFlight’ta katıl',
    androidTitle: 'Android',
    androidBody: 'Android betası yolda — aynı mesh, aynı açık protokol.',
    androidCta: 'APK indir',
  },

  faq: {
    title: 'Sıkça sorulan sorular',
    subtitle: 'Mesh’e katılmadan önce herkesin sorduğu her şey.',
    items: [
      {
        q: 'Seklio internete ihtiyaç duyar mı?',
        a: 'Hayır. Telefonlar Bluetooth LE ve yerel Wi-Fi üzerinden doğrudan birbirine bağlanır. Hiçbir aşamada sunucu yoktur — Seklio uçak modundaki Wi-Fi’da da, ortak bir ağda da, hiçbir altyapı yokken de aynı şekilde çalışır.',
      },
      {
        q: 'Menzili ne kadar?',
        a: 'Doğrudan bağlantı, Bluetooth’un ya da yerel Wi-Fi ağınızın eriştiği yere kadar uzanır. Ama mesajlar orada durmaz: her telefon onları bir sonrakine iletir, yani gerçek menziliniz bağlı mesh’in tamamıdır — bir mesaj alıcısını bulmak için 7 telefona kadar (duyurularda 15) sekebilir.',
      },
      {
        q: 'Gerçekten gizli mi?',
        a: 'Her birebir ve grup mesajı, iyi incelenmiş kriptografik yapı taşlarıyla (X25519 anahtar anlaşması, ChaCha20-Poly1305 şifrelemesi, Ed25519 imzaları) uçtan uca şifrelenir. Mesajlarınızı taşıyan telefonlar yalnızca şifreli veri görür. Sunucu olmadığı için meta verilerin biriktiği merkezi bir yer de yoktur.',
      },
      {
        q: 'Hangi verileri topluyorsunuz?',
        a: 'Hiçbirini. Veri gönderilecek bir arka uç yok. Telefonunuzdan çıkabilecek tek şey, bir hatayı bildirmek isterseniz kendi elinizle oluşturup gönderdiğiniz şifreli bir tanılama raporudur.',
      },
      {
        q: 'Şu anda yakınımda olmayan birine mesaj atabilir miyim?',
        a: 'Evet. Şifreli mesajınız telefonunuzda (ve teslimatında payı olan telefonlarda) saklanır, alıcıya giden bir yol belirdiğinde iletilir — 7 güne kadar. Teslimat uçtan uca onaylanır; baloncuğunuz mesajın gerçekten ulaştığını söyler.',
      },
      {
        q: 'Pilimi bitirir mi?',
        a: 'Seklio, gün boyu arka planda çalışmak için tasarlanmış Bluetooth Low Energy etrafında kurulmuştur ve mümkün olduğunda daha hızlı ve bayt başına daha ucuz olan Wi-Fi bağlantılarına geçer. Tüketimi GPS tarzı uygulamalara değil, diğer “yakındakiler” uygulamalarına benzer.',
      },
      {
        q: 'Telefon numarası ya da e-posta gerekiyor mu?',
        a: 'Hayır. Kimliğiniz cihazınızda üretilen bir kriptografik anahtar çiftidir. Bir kullanıcı adı seçersiniz (ör. @deniz) — kimsenin gördüğü tek şey budur ve istediğiniz zaman değiştirebilirsiniz.',
      },
      {
        q: 'Android sürümü var mı?',
        a: 'Henüz değil — Android betası üzerinde çalışılıyor ve çok yakında hazır olacak. iOS şu anda TestFlight’ta açık betada. İki platform aynı açık iletişim protokolünü konuşacak, yani aynı mesh’e katılacaklar.',
      },
      {
        q: 'Premium ne katıyor?',
        a: 'Premium, Çevrelerle birlikte çok yakında geliyor. Çevre yönetenler için olacak: şifreli grup oluşturma ile davet ve üye yönetimi gibi yöneticilik özellikleri. Mesajlaşma, Çevrelere katılma, duyurular, fotoğraflar — bunların hepsi sonsuza kadar ücretsiz kalacak.',
      },
      {
        q: 'Sohbet geçmişim bir yere yedekleniyor mu?',
        a: 'Hayır. Geçmişiniz yalnızca cihazınızda bulunur. Bu bir özellik: hiç kimse — biz dahil — onu teslim edemez, sızdıramaz ya da işleyemez. Uygulamayı silmek verinizi siler.',
      },
    ],
  },

  privacyPage: {
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 17 Temmuz 2026',
    sections: [
      {
        h: 'Kısa özet',
        ps: [
          'Seklio’nun sunucusu ve kullanıcı hesabı yoktur. Hiçbir kişisel veri toplamayız, saklamayız, işlemeyiz ve paylaşmayız — bunu yapacak altyapı mevcut değildir.',
          'Mesajlarınız telefonlar arasında doğrudan, uçtan uca şifreli olarak taşınır ve yalnızca ilgili cihazlarda saklanır.',
        ],
      },
      {
        h: 'Toplamadıklarımız',
        ps: [
          'Adınızı, telefon numaranızı, e-posta adresinizi, rehberinizi, konumunuzu, mesaj içeriklerinizi, meta verilerinizi, kullanım analitiğini, reklam tanımlayıcılarını ya da başka hiçbir şeyi toplamayız. Seklio hiçbir analitik veya takip SDK’sı içermez.',
          'Kayıt ve giriş yoktur. Uygulamadaki kimliğiniz cihazınızda üretilen bir kriptografik anahtar çiftidir; cihazınızdan asla çıkmaz.',
        ],
      },
      {
        h: 'Cihazınızda kalanlar',
        ps: [
          'Profiliniz (kullanıcı adı, avatar, isteğe bağlı yaş beyanı), sohbetleriniz, anahtarlarınız ve ayarlarınız telefonunuzda yerel olarak, cihazınızın güvenlik mekanizmalarıyla (Keychain / Keystore) korunarak saklanır.',
          'Alıcılarla paylaştığınız mesajlar, her mesajlaşma uygulamasında olduğu gibi onların cihazlarında da bulunur. Henüz teslim edilmemiş mesajların şifreli kopyaları, mesh’teki aracı telefonlarda geçici olarak bekleyebilir — bu telefonlar onları okuyamaz.',
        ],
      },
      {
        h: 'Tanılama raporları (isteğe bağlı, manuel)',
        ps: [
          'Bir hata bildirmek isterseniz uygulama bir tanılama dosyası oluşturabilir. Bu dosya yalnızca teknik kayıtlar içerir — asla mesaj içeriği, görünen adlar veya tam tanımlayıcılar içermez — ve yalnızca geliştiricinin açabileceği şekilde telefonunuzda şifrelenir.',
          'Bu dosyayı kendiniz gönderirsiniz (örneğin e-postayla). Hiçbir şey otomatik olarak iletilmez.',
        ],
      },
      {
        h: 'Satın almalar',
        ps: [
          'Premium satın almaları tamamen Apple (App Store) ya da uygulamayı edindiğiniz mağaza tarafından işlenir. Ödeme bilgilerinizi asla görmeyiz. Yetki kontrolleri cihazınızda gerçekleşir.',
        ],
      },
      {
        h: 'Beta programları',
        ps: [
          'iOS betasına TestFlight üzerinden katılırsanız Apple, kendi koşulları ve gizlilik politikası kapsamında sınırlı beta verisi (çökme kayıtları ve temel cihaz bilgisi gibi) toplar. Android beta APK’sı GitHub üzerinden dağıtılır; indirme GitHub’ın koşullarına tabidir.',
        ],
      },
      {
        h: 'Çocuklar',
        ps: [
          'Seklio yaşa uygun korumalar içerir: fotoğraf özellikleri, cihaz üzerinde yapılan yaş beyanına göre yalnızca yetişkin kullanıcılara açıktır. Yaş bilgisi cihazdan çıkmaz.',
        ],
      },
      {
        h: 'Bu politikadaki değişiklikler',
        ps: [
          'Bu politika değişirse güncel sürüm, yeni bir “son güncelleme” tarihiyle bu sayfada yayımlanır.',
        ],
      },
      {
        h: 'İletişim',
        ps: ['Gizlilikle ilgili sorularınız için: {email}.'],
      },
    ],
  },

  supportPage: {
    title: 'Destek',
    intro: 'Takıldınız mı, bir hata mı buldunuz, yoksa sadece merak mı ediyorsunuz? Yardım almanın yolları:',
    sections: [
      {
        h: 'Önce SSS’ye bakın',
        ps: ['Soruların çoğu — menzil, pil, gizlilik, çevrimdışı teslimat — {faq} sayfasında yanıtlı.'],
      },
      {
        h: 'Hatayı uygulamanın içinden bildirin',
        ps: [
          'En iyi hata bildirimleri uygulamanın kendisinden gelir: Profil → Tanılama → Hata bildir. Bu, şifreli bir tanılama dosyası oluşturur (yalnızca teknik kayıtlar, asla mesaj içeriği değil) ve sizin için bir e-postaya ekler.',
          'Uygulama çöktüyse bir sonraki açılışta rapor göndermeyi önerir.',
        ],
      },
      {
        h: 'İletişim',
        ps: [
          'Bize dilediğiniz zaman {email} adresinden yazın. iOS beta geri bildirimi için TestFlight’ın yerleşik “Beta Geri Bildirimi Gönder” özelliğini de kullanabilirsiniz.',
        ],
      },
    ],
  },

  langNames: { en: 'English', tr: 'Türkçe' },

  footer: {
    tagline: 'Sunucusuz mesh mesajlaşma. Hesap yok, sunucu yok — sadece birbirine yardım eden telefonlar.',
    product: 'Ürün',
    resources: 'Kaynaklar',
    legal: 'Gizlilik ve Destek',
    language: 'Dil',
    rights: '© 2026 Seklio. Tüm hakları saklıdır.',
  },

  notFound: {
    title: 'Sayfa bulunamadı',
    body: 'Bu sayfa yok — belki de bir kez fazla sekmiştir.',
    cta: 'Ana sayfaya dön',
  },
};
