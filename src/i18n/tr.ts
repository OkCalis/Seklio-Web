import type { Dict } from './en';

export const tr: Dict = {
  meta: {
    landingTitle: 'Seklio — İnternete ihtiyaç duymayan mesajlaşma',
    landingDescription:
      'Seklio sunucusuz bir örgü ağ mesajlaşma uygulamasıdır. Yakındaki telefonlar Bluetooth ve Wi-Fi üzerinden bağlanır, uçtan uca şifreli mesajları cihazdan cihaza iletir. Sunucu yok, hesap yok, telefon numarası yok.',
    faqTitle: 'SSS — Seklio',
    faqDescription: 'Sunucusuz örgü ağ mesajlaşma uygulaması Seklio hakkında sıkça sorulan sorular.',
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
    download: 'İndir',
  },

  hero: {
    badge: 'İnternet gerekmez',
    title: 'İnternete ihtiyaç duymayan mesajlaşma.',
    subtitle:
      'Seklio, yakındaki telefonları Bluetooth ve Wi-Fi üzerinden doğrudan birbirine bağlar; mesajların cihazdan cihaza uzanan bir örgü ağ üzerinden taşınır. Sunucu yok, hesap yok, telefon numarası yok — ve her şey uçtan uca şifreli.',
    ctaIos: 'iOS betasına katıl',
    ctaAndroidDl: 'Android için indir',
    ctaOther: 'Diğer indirme seçenekleri',
    ctaDownloads: 'İndirmeler',
    note: 'Ücretsiz · iOS açık betası TestFlight’ta · Android alfası Google Play’de, APK GitHub’da',
  },

  comingSoon: 'Çok yakında',

  how: {
    title: 'Nasıl çalışır',
    subtitle: 'Üç fikir, sıfır altyapı.',
    steps: [
      {
        title: 'Telefonlar birbirini yakında bulur',
        body:
          'Seklio, çevrendeki telefonları Bluetooth LE ve yerel Wi-Fi üzerinden keşfeder. SIM gerekmez, çekim gerekmez, kurulum gerekmez — yakındaysan bağlısın.',
      },
      {
        title: 'Mesajlar cihazdan cihaza seker',
        body:
          'Seklio çalıştıran her telefon, mühürlü zarfları bir sonrakine iletir. Mesajların telefondan telefona seke seke, doğrudan menzil dışındaki arkadaşlarına bile ulaşır — örgü ağ dediğimiz şey bu.',
      },
      {
        title: 'Yalnızca alıcı okuyabilir',
        body:
          'Mesajlar telefonundan çıkmadan önce uçtan uca şifrelenir. Onları taşıyan telefonlar yalnızca şifreli veri görür — sözlerini asla.',
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
        body: 'Kimliğin telefonunda üretilen bir anahtar çiftidir. Telefon numarası yok, e-posta yok, kayıt yok — bir kullanıcı adı seç ve başla.',
      },
      {
        icon: 'offline',
        title: 'Çekim olmadan çalışır',
        body: 'Kalabalık etkinlikler, kampüsler, uçuşlar, dağ başları, elektrik kesintileri — şebekenin yetmediği her yerde örgü ağ çalışmaya devam eder.',
      },
      {
        icon: 'clock',
        title: 'Sonra da teslim eder',
        body: 'Arkadaşın menzil dışındaysa şifreli mesajın bekler ve onunla karşılaşan telefonlar üzerinden yola devam eder — 7 güne kadar.',
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
        body: 'Menzildeki herkese tek seferde seslen — imzalı olduğu için alıcılar mesajın gerçekten senden geldiğini bilir.',
      },
      {
        icon: 'photo',
        title: 'Fotoğraflar, şifreli',
        body: 'Fotoğrafları uçtan uca şifreli paylaş; yakındayken Wi-Fi hızlı şeridi, değilken sabırlı parça parça teslimat.',
      },
      {
        icon: 'qr',
        title: 'Yüz yüze doğrula',
        body: 'Arkadaşının QR kodunu okutarak gerçekten o olduğunu doğrula. Doğrulama karşılıklıdır, kişiseldir ve asla bir sunucudan geçmez.',
      },
    ],
  },

  privacy: {
    title: 'Toplanacak bir şey yok. Toplanacak bir yer de yok.',
    body:
      'Seklio’da sunucu, analitik ya da kullanıcı veritabanı yoktur — seni izlemesi beklenen altyapı burada hiç var olmadı.',
    points: [
      'Mesajlar yalnızca senin ve alıcının telefonunda yaşar.',
      'Kimliğin cihazından asla çıkmaz — bir profil değil, bir anahtardır.',
      'Takip yok, reklam yok, veri paylaşımı yok. Paylaşılacak bir şey yok.',
    ],
    link: 'Gizlilik politikasını oku',
  },

  download: {
    title: 'Betayı dene',
    subtitle: 'iOS açık betada; Android alfa aşamasında.',
    iosTitle: 'iOS',
    iosBody: 'TestFlight üzerinden açık beta. TestFlight uygulamasını kur, tek dokunuşla katıl.',
    iosCta: 'TestFlight’ta katıl',
    androidTitle: 'Android',
    androidBody: 'Android alfası iki adımda: önce “Seklio Alpha Channel” Google Grubu’na katıl, ardından uygulamayı Google Play’den yükle.',
    alphaCta: '1 · Google Groups’ta Alfa Testine Katıl',
    playWaitNote: 'Üyeliğinin Google Play’e işlemesi biraz zaman alabilir — sayfa uygulamanın henüz kullanılamadığını söylerse bir süre bekleyip 2. adımı yeniden dene.',
    playCta: '2 · Google Play’den edin',
    apkAltNote: 'İstersen iki adımı da atla — APK, aynı uygulamanın Google Play gerektirmeyen hali. Telefonunda Google Play hizmetleri yoksa da birebir çalışır.',
    androidCta: 'APK indir',
  },

  faq: {
    title: 'Sıkça sorulan sorular',
    subtitle: 'Örgü ağa katılmadan önce herkesin sorduğu her şey.',
    items: [
      {
        q: 'Seklio internete ihtiyaç duyar mı?',
        a: 'Hayır. Telefonlar Bluetooth LE ve yerel Wi-Fi üzerinden doğrudan birbirine bağlanır. Hiçbir aşamada sunucu yoktur — Seklio uçak modundaki Wi-Fi’da da, ortak bir ağda da, hiçbir altyapı yokken de aynı şekilde çalışır.',
      },
      {
        q: 'Menzili ne kadar?',
        a: 'Doğrudan bağlantı, Bluetooth’un ya da yerel Wi-Fi ağının eriştiği yere kadar uzanır. Ama mesajlar orada durmaz: her telefon onları bir sonrakine iletir, yani gerçek menzilin bağlı örgü ağın tamamıdır — bir mesaj alıcısını bulmak için 7 telefona kadar (duyurularda 15) sekebilir.',
      },
      {
        q: 'Gerçekten gizli mi?',
        a: 'Her birebir ve grup mesajı, iyi incelenmiş kriptografik yapı taşlarıyla (X25519 anahtar anlaşması, ChaCha20-Poly1305 şifrelemesi, Ed25519 imzaları) uçtan uca şifrelenir. Mesajlarını taşıyan telefonlar yalnızca şifreli veri görür. Sunucu olmadığı için meta verilerin biriktiği merkezi bir yer de yoktur.',
      },
      {
        q: 'Hangi verileri topluyorsunuz?',
        a: 'Hiçbirini. Veri gönderilecek bir arka uç yok. Telefonundan çıkabilecek tek şey, bir hatayı bildirmek istersen kendi elinle oluşturup gönderdiğin şifreli bir tanılama raporudur.',
      },
      {
        q: 'Şu anda yakınımda olmayan birine mesaj atabilir miyim?',
        a: 'Evet. Şifreli mesajın telefonunda (ve teslimatında payı olan telefonlarda) saklanır, alıcıya giden bir yol belirdiğinde iletilir — 7 güne kadar. Teslimat uçtan uca onaylanır; baloncuğun mesajın gerçekten ulaştığını söyler.',
      },
      {
        q: 'Pilimi bitirir mi?',
        a: 'Seklio, gün boyu arka planda çalışmak için tasarlanmış Bluetooth Low Energy etrafında kurulmuştur ve mümkün olduğunda daha hızlı ve bayt başına daha ucuz olan Wi-Fi bağlantılarına geçer. Tüketimi GPS tarzı uygulamalara değil, diğer “yakındakiler” uygulamalarına benzer.',
      },
      {
        q: 'Telefon numarası ya da e-posta gerekiyor mu?',
        a: 'Hayır. Kimliğin cihazında üretilen bir kriptografik anahtar çiftidir. Bir kullanıcı adı seçersin (ör. @irem) — başkalarının gördüğü tek şey budur ve onu istediğin zaman değiştirebilirsin.',
      },
      {
        q: 'Gerçek adımı kullanmak zorunda mıyım?',
        a: 'Hayır — gerçek ad tamamen isteğe bağlıdır. Herkes yalnızca kullanıcı adını görür. Gerçek adını eklemeyi seçersen, yalnızca yüz yüze doğruladığın arkadaşlarınla uçtan uca şifreli olarak paylaşılır; asla ağa yayınlanmaz ve istediğin zaman geri çekebilirsin.',
      },
      {
        q: 'Android sürümü var mı?',
        a: 'Evet — Android şu an Google Play’de alfa aşamasında ve erişim iki adımlı: önce “Seklio Alpha Channel” Google Grubu’na katılıyorsun, ardından uygulamayı aynı Google hesabıyla Play sayfasından yüklüyorsun. Üyeliğinin Google Play’e işlemesi biraz zaman alabilir; sayfa uygulamanın henüz kullanılamadığını söylerse bir süre bekleyip yeniden dene. Alfa APK’sını gruba üye olmadan, doğrudan GitHub Releases sayfamızdan da indirebilirsin — telefonunda Google Play hizmetleri yoksa da çalışır. iOS ise TestFlight’ta açık betada. İki platform aynı açık iletişim protokolünü konuşur, yani aynı örgü ağa katılırlar.',
      },
      {
        q: 'Premium ne katıyor?',
        a: 'Premium, Çevrelerle birlikte çok yakında geliyor. Çevre yönetenler için olacak: şifreli grup oluşturma ile davet ve üye yönetimi gibi yöneticilik özellikleri. Mesajlaşma, Çevrelere katılma, duyurular, fotoğraflar — bunların hepsi sonsuza kadar ücretsiz kalacak.',
      },
      {
        q: 'Sohbet geçmişim bir yere yedekleniyor mu?',
        a: 'Seklio tarafından değil — Seklio’nun sunucusu yoktur ve uygulama sohbetlerini kendiliğinden hiçbir yere yüklemez. iOS’ta geçmişin, telefonunun normal cihaz yedeğinin bir parçasıdır: telefonunu iCloud’a yedekliyorsan sohbetlerin de iCloud hesabının koruması altında yedeğe dahil olur ve diğer verilerinle birlikte geri yüklenir. Her durumda Seklio tarafında geçmişini okuyabilecek, teslim edebilecek ya da işleyebilecek kimse yoktur.',
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
          'Mesajların telefonlar arasında doğrudan, uçtan uca şifreli olarak taşınır ve yalnızca ilgili cihazlarda saklanır.',
        ],
      },
      {
        h: 'Toplamadıklarımız',
        ps: [
          'Adını, telefon numaranı, e-posta adresini, rehberini, konumunu, mesaj içeriklerini, meta verilerini, kullanım analitiğini, reklam tanımlayıcılarını ya da başka hiçbir şeyi toplamayız. Seklio hiçbir analitik veya takip SDK’sı içermez.',
          'Kayıt ve giriş yoktur. Uygulamadaki kimliğin cihazında üretilen bir kriptografik anahtar çiftidir; cihazından asla çıkmaz.',
        ],
      },
      {
        h: 'Cihazında kalanlar',
        ps: [
          'Profilin (kullanıcı adı, avatar, isteğe bağlı yaş beyanı), sohbetlerin, anahtarların ve ayarların telefonunda yerel olarak, cihazının güvenlik mekanizmalarıyla (Keychain / Keystore) korunarak saklanır.',
          'Alıcılarla paylaştığın mesajlar, her mesajlaşma uygulamasında olduğu gibi onların cihazlarında da bulunur. Henüz teslim edilmemiş mesajların şifreli kopyaları, örgü ağdaki aracı telefonlarda geçici olarak bekleyebilir — bu telefonlar onları okuyamaz.',
        ],
      },
      {
        h: 'Tanılama raporları (isteğe bağlı, manuel)',
        ps: [
          'Bir hata bildirmek istersen uygulama bir tanılama dosyası oluşturabilir. Bu dosya yalnızca teknik kayıtlar içerir — asla mesaj içeriği, görünen adlar veya tam tanımlayıcılar içermez — ve yalnızca geliştiricinin açabileceği şekilde telefonunda şifrelenir.',
          'Bu dosyayı kendin gönderirsin (örneğin e-postayla). Hiçbir şey otomatik olarak iletilmez.',
        ],
      },
      {
        h: 'Satın almalar',
        ps: [
          'Premium satın almaları tamamen Apple (App Store) ya da uygulamayı edindiğin mağaza tarafından işlenir. Ödeme bilgilerini asla görmeyiz. Yetki kontrolleri cihazında gerçekleşir.',
        ],
      },
      {
        h: 'Beta programları',
        ps: [
          'iOS betasına TestFlight üzerinden katılırsan Apple, kendi koşulları ve gizlilik politikası kapsamında sınırlı beta verisi (çökme kayıtları ve temel cihaz bilgisi gibi) toplar. Android alfası Google Play ve GitHub üzerinden dağıtılır; bu kanallar kendi koşullarına tabidir.',
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
        ps: ['Gizlilikle ilgili soruların için: {email}.'],
      },
    ],
  },

  supportPage: {
    title: 'Destek',
    intro: 'Takıldın mı, bir hata mı buldun, yoksa sadece merak mı ediyorsun? Yardım almanın yolları:',
    sections: [
      {
        h: 'Önce SSS’ye bak',
        ps: ['Soruların çoğu — menzil, pil, gizlilik, çevrimdışı teslimat — {faq} sayfasında yanıtlı.'],
      },
      {
        h: 'Hatayı uygulamanın içinden bildir',
        ps: [
          'En iyi hata bildirimleri uygulamanın kendisinden gelir: Profil → Tanılama → Hata bildir. Bu, şifreli bir tanılama dosyası oluşturur (yalnızca teknik kayıtlar, asla mesaj içeriği değil) ve senin için bir e-postaya ekler.',
          'Uygulama çöktüyse bir sonraki açılışta rapor göndermeyi önerir.',
        ],
      },
      {
        h: 'İletişim',
        ps: [
          'Bize dilediğin zaman {email} adresinden yaz. iOS beta geri bildirimi için TestFlight’ın yerleşik “Beta Geri Bildirimi Gönder” özelliğini de kullanabilirsin.',
        ],
      },
    ],
  },

  langNames: { en: 'English', tr: 'Türkçe' },

  footer: {
    tagline: 'Sunucusuz örgü ağ mesajlaşması. Hesap yok, sunucu yok — sadece birbirine yardım eden telefonlar.',
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
