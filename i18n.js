// ─── Ping Pong Garden — i18n engine + translations ────────────────────────────
// Usage: add data-i18n="key" to any element whose textContent should be
//        translated.  For placeholders use data-i18n-placeholder="key".
//        For aria-label use data-i18n-aria="key".

const TRANSLATIONS = {

  // ── SHARED / NAV ────────────────────────────────────────────────────────────
  'nav.home':      { en: 'Home',     de: 'Start',      es: 'Inicio',   it: 'Home'       },
  'nav.bookings':  { en: 'Bookings', de: 'Buchungen',  es: 'Reservas', it: 'Prenotazioni' },

  // ── LANDING — HERO ──────────────────────────────────────────────────────────
  'hero.eyebrow':  { en: "Berlin's finest table tennis club",
                     de: "Berlins bester Tischtennisclub",
                     es: "El mejor club de tenis de mesa de Berlín",
                     it: "Il miglior club di ping pong di Berlino" },
  'hero.title.1':  { en: 'Play.',     de: 'Spielen.',   es: 'Juega.',    it: 'Gioca.'    },
  'hero.title.2':  { en: 'Connect.',  de: 'Verbinden.', es: 'Conéctate.',it: 'Connettiti.'},
  'hero.title.3':  { en: 'Rally.',    de: 'Rallye.',    es: 'Rallea.',   it: 'Rimbalza.' },
  'hero.desc':     { en: 'Six professional courts, an open community, and a garden terrace. Drop in any time or book your court in seconds.',
                     de: 'Sechs professionelle Platten, eine offene Community und eine Gartenteorrasse. Komm einfach vorbei oder buche deinen Platz in Sekunden.',
                     es: 'Seis pistas profesionales, una comunidad abierta y una terraza jardín. Entra cuando quieras o reserva tu pista en segundos.',
                     it: 'Sei campi professionali, una comunità aperta e una terrazza giardino. Passa quando vuoi o prenota il tuo campo in pochi secondi.' },
  'hero.cta.book': { en: 'Book a court', de: 'Platz buchen', es: 'Reservar pista', it: 'Prenota un campo' },
  'hero.cta.on':   { en: "What's on",    de: 'Veranstaltungen', es: 'Qué hay',    it: 'Cosa c\'è' },

  // ── LANDING — STATS ─────────────────────────────────────────────────────────
  'stats.courts':       { en: 'Courts',       de: 'Platten',     es: 'Pistas',     it: 'Campi'        },
  'stats.open':         { en: 'Open daily',   de: 'Tägl. geöffnet', es: 'Abierto a diario', it: 'Aperto ogni giorno' },
  'stats.members':      { en: 'Members',      de: 'Mitglieder',  es: 'Miembros',   it: 'Membri'       },
  'stats.from':         { en: 'From per hour',de: 'Ab pro Stunde',es: 'Desde por hora', it: 'Da all\'ora' },

  // ── LANDING — FEED ──────────────────────────────────────────────────────────
  'feed.eyebrow':       { en: 'Latest from the garden', de: 'Neuigkeiten aus dem Garden', es: 'Lo último del jardín', it: 'Le ultime dal giardino' },
  'feed.title':         { en: 'News & Stories', de: 'News & Geschichten', es: 'Noticias e historias', it: 'Notizie e storie' },

  'post1.tag':     { en: 'Tournament', de: 'Turnier',    es: 'Torneo',     it: 'Torneo'      },
  'post1.title':   { en: 'Summer Open 2025 — Registration now live',
                     de: 'Summer Open 2025 — Anmeldung jetzt möglich',
                     es: 'Summer Open 2025 — Inscripción ya disponible',
                     it: 'Summer Open 2025 — Iscrizioni ora aperte' },
  'post1.excerpt': { en: 'Our biggest event of the year returns. 64-player bracket, prize pool, and a cold beer for every participant. Sign up before spots are gone.',
                     de: 'Unser größtes Event des Jahres ist zurück. 64-Spieler-Bracket, Preispool und ein kühles Bier für jeden Teilnehmer. Jetzt anmelden, bevor die Plätze weg sind.',
                     es: 'Nuestro mayor evento del año regresa. Cuadro de 64 jugadores, bolsa de premios y una cerveza fría para cada participante. Inscríbete antes de que se agoten los cupos.',
                     it: 'Il nostro più grande evento dell\'anno è tornato. Tabellone da 64 giocatori, montepremi e una birra fredda per ogni partecipante. Iscriviti prima che i posti finiscano.' },

  'post2.tag':     { en: 'Announcement', de: 'Ankündigung', es: 'Anuncio',   it: 'Annuncio'    },
  'post2.title':   { en: 'Court 5 & 6 now open after renovation',
                     de: 'Platten 5 & 6 nach Renovierung jetzt geöffnet',
                     es: 'Pistas 5 y 6 abiertas tras la renovación',
                     it: 'Campi 5 e 6 ora aperti dopo la ristrutturazione' },
  'post2.excerpt': { en: 'New Stiga tables, fresh lighting, and spring-loaded floors. Come try them out this weekend.',
                     de: 'Neue Stiga-Tische, frisches Licht und federnde Böden. Komm dieses Wochenende und teste sie aus.',
                     es: 'Nuevas mesas Stiga, iluminación renovada y suelos con amortiguación. Ven a probarlas este fin de semana.',
                     it: 'Nuovi tavoli Stiga, illuminazione rinnovata e pavimenti ammortizzati. Vieni a provarli questo weekend.' },

  'post3.tag':     { en: 'Community', de: 'Community',  es: 'Comunidad',  it: 'Comunità'    },
  'post3.title':   { en: 'Tuesday beginner nights are back',
                     de: 'Dienstags-Anfängerabende sind zurück',
                     es: 'Las noches para principiantes del martes han vuelto',
                     it: 'Le serate per principianti del martedì sono tornate' },
  'post3.excerpt': { en: 'Free coaching every Tuesday from 19:00. All levels welcome — just show up.',
                     de: 'Kostenloses Coaching jeden Dienstag ab 19:00. Alle Niveaus willkommen — einfach vorbeikommen.',
                     es: 'Entrenamiento gratuito cada martes desde las 19:00. Todos los niveles bienvenidos — solo preséntate.',
                     it: 'Allenamento gratuito ogni martedì dalle 19:00. Tutti i livelli benvenuti — presentati e basta.' },

  'post4.tag':     { en: 'Gear',      de: 'Ausrüstung', es: 'Equipamiento', it: 'Attrezzatura' },
  'post4.title':   { en: 'New paddle rentals — premium blades available',
                     de: 'Neue Schläger-Verleih — Premium-Blätter verfügbar',
                     es: 'Nuevo alquiler de raquetas — palas premium disponibles',
                     it: 'Noleggio racchette — pale premium disponibili' },
  'post4.excerpt': { en: 'Butterfly Timo Boll ALC and Stiga Infinity now in stock at the front desk.',
                     de: 'Butterfly Timo Boll ALC und Stiga Infinity jetzt an der Rezeption verfügbar.',
                     es: 'Butterfly Timo Boll ALC y Stiga Infinity ya disponibles en recepción.',
                     it: 'Butterfly Timo Boll ALC e Stiga Infinity ora disponibili alla reception.' },

  'post5.tag':     { en: 'Garden',    de: 'Garten',     es: 'Jardín',     it: 'Giardino'    },
  'post5.title':   { en: 'The terrace is open — play outside this summer',
                     de: 'Die Terrasse ist geöffnet — spiel diesen Sommer draußen',
                     es: 'La terraza está abierta — juega al aire libre este verano',
                     it: 'La terrazza è aperta — gioca all\'aperto questa estate' },
  'post5.excerpt': { en: 'Our outdoor court is back in action. Book court 6 for open-air rallies until late September.',
                     de: 'Unser Außenplatz ist wieder in Betrieb. Buche Platz 6 für Freiluft-Rallyes bis Ende September.',
                     es: 'Nuestra pista exterior está de vuelta. Reserva la pista 6 para partidas al aire libre hasta finales de septiembre.',
                     it: 'Il nostro campo all\'aperto è di nuovo operativo. Prenota il campo 6 per le partite all\'aperto fino a fine settembre.' },

  // ── LANDING — EVENTS ────────────────────────────────────────────────────────
  'events.eyebrow': { en: "Don't miss out", de: 'Nicht verpassen', es: 'No te lo pierdas', it: 'Non perdertelo' },
  'events.title':   { en: 'Upcoming events', de: 'Kommende Veranstaltungen', es: 'Próximos eventos', it: 'Prossimi eventi' },

  'event1.name':   { en: 'Summer Open 2025 — Qualifier Round',
                     de: 'Summer Open 2025 — Qualifikationsrunde',
                     es: 'Summer Open 2025 — Ronda clasificatoria',
                     it: 'Summer Open 2025 — Round di qualificazione' },
  'event1.detail': { en: 'Courts 1–4 · 10:00 – 18:00 · All levels',
                     de: 'Platten 1–4 · 10:00 – 18:00 · Alle Niveaus',
                     es: 'Pistas 1–4 · 10:00 – 18:00 · Todos los niveles',
                     it: 'Campi 1–4 · 10:00 – 18:00 · Tutti i livelli' },
  'event1.badge':  { en: 'Open', de: 'Offen', es: 'Abierto', it: 'Aperto' },

  'event2.name':   { en: 'Beginner Night — Free coaching session',
                     de: 'Anfängerabend — Kostenloses Coaching',
                     es: 'Noche de principiantes — Sesión de entrenamiento gratuita',
                     it: 'Serata per principianti — Sessione di allenamento gratuita' },
  'event2.detail': { en: 'Court 3 · 19:00 – 21:00 · No experience needed',
                     de: 'Platte 3 · 19:00 – 21:00 · Keine Erfahrung nötig',
                     es: 'Pista 3 · 19:00 – 21:00 · Sin experiencia previa',
                     it: 'Campo 3 · 19:00 – 21:00 · Nessuna esperienza richiesta' },
  'event2.badge':  { en: 'Free', de: 'Kostenlos', es: 'Gratis', it: 'Gratuito' },

  'event3.name':   { en: "Members' League — Round 4",
                     de: 'Mitglieder-Liga — Runde 4',
                     es: 'Liga de socios — Ronda 4',
                     it: 'Lega dei soci — Round 4' },
  'event3.detail': { en: 'Courts 1–6 · 14:00 – 20:00 · Members only',
                     de: 'Platten 1–6 · 14:00 – 20:00 · Nur Mitglieder',
                     es: 'Pistas 1–6 · 14:00 – 20:00 · Solo socios',
                     it: 'Campi 1–6 · 14:00 – 20:00 · Solo soci' },
  'event3.badge':  { en: '3 spots left', de: '3 Plätze frei', es: '3 plazas', it: '3 posti rimasti' },

  'event4.name':   { en: 'Summer Open 2025 — Finals Day',
                     de: 'Summer Open 2025 — Finaltag',
                     es: 'Summer Open 2025 — Día de finales',
                     it: 'Summer Open 2025 — Giorno delle finali' },
  'event4.detail': { en: 'Main Hall · All day · Spectators welcome',
                     de: 'Haupthalle · Ganztägig · Zuschauer willkommen',
                     es: 'Sala principal · Todo el día · Espectadores bienvenidos',
                     it: 'Sala principale · Tutto il giorno · Spettatori benvenuti' },
  'event4.badge':  { en: 'Open', de: 'Offen', es: 'Abierto', it: 'Aperto' },

  'event5.name':   { en: 'Garden Night — Open play under the stars',
                     de: 'Garden Night — Offenes Spiel unter dem Sternenhimmel',
                     es: 'Garden Night — Juego libre bajo las estrellas',
                     it: 'Garden Night — Gioco libero sotto le stelle' },
  'event5.detail': { en: 'Outdoor Court 6 · 20:00 – 23:00 · Casual',
                     de: 'Außenplatz 6 · 20:00 – 23:00 · Entspannt',
                     es: 'Pista exterior 6 · 20:00 – 23:00 · Informal',
                     it: 'Campo esterno 6 · 20:00 – 23:00 · Informale' },
  'event5.badge':  { en: 'Open', de: 'Offen', es: 'Abierto', it: 'Aperto' },

  // ── LANDING — FOOTER ────────────────────────────────────────────────────────
  'footer.copy':    { en: '© 2025 Ping Pong Garden Berlin', de: '© 2025 Ping Pong Garden Berlin', es: '© 2025 Ping Pong Garden Berlín', it: '© 2025 Ping Pong Garden Berlino' },
  'footer.about':   { en: 'About',   de: 'Über uns',  es: 'Sobre nosotros', it: 'Chi siamo' },
  'footer.rules':   { en: 'Rules',   de: 'Regeln',    es: 'Normas',         it: 'Regole'    },
  'footer.contact': { en: 'Contact', de: 'Kontakt',   es: 'Contacto',       it: 'Contatti'  },

  // ── BOOKING — LEGEND / HINTS ─────────────────────────────────────────────────
  'bk.myBooking':   { en: 'My Booking', de: 'Meine Buchung', es: 'Mi reserva', it: 'La mia prenotazione' },
  'bk.legend.available': { en: 'Available (drag to select)', de: 'Verfügbar (ziehen zum Wählen)', es: 'Disponible (arrastrar para seleccionar)', it: 'Disponibile (trascina per selezionare)' },
  'bk.legend.yours':     { en: 'Your booking',  de: 'Deine Buchung',  es: 'Tu reserva',     it: 'La tua prenotazione' },
  'bk.legend.booked':    { en: 'Booked',         de: 'Gebucht',        es: 'Reservado',      it: 'Prenotato'           },
  'bk.legend.unavail':   { en: 'Unavailable',    de: 'Nicht verfügbar',es: 'No disponible',  it: 'Non disponibile'     },
  'bk.legend.offpeak':   { en: 'Off-peak €10/h', de: 'Nebenzeiten €10/h', es: 'Valle €10/h', it: 'Fuori picco €10/h'  },
  'bk.legend.standard':  { en: 'Standard €15/h', de: 'Standard €15/h',   es: 'Estándar €15/h',it: 'Standard €15/h'   },
  'bk.legend.peak':      { en: 'Peak €20/h',     de: 'Hauptzeit €20/h',  es: 'Pico €20/h',   it: 'Picco €20/h'       },
  'bk.hint.max':         { en: 'Max 2h per booking', de: 'Max. 2h pro Buchung', es: 'Máx. 2h por reserva', it: 'Max 2h per prenotazione' },
  'bk.sidebar.title':    { en: 'My Bookings',    de: 'Meine Buchungen',es: 'Mis reservas',   it: 'Le mie prenotazioni' },
  'bk.sidebar.empty':    { en: 'No bookings yet — drag a time slot to get started.', de: 'Noch keine Buchungen — ziehe einen Zeitslot, um zu beginnen.', es: 'Sin reservas aún — arrastra una franja horaria para empezar.', it: 'Nessuna prenotazione — trascina una fascia oraria per iniziare.' },

  // ── BOOKING — MODAL STEP 1 ──────────────────────────────────────────────────
  'modal.s1.title':    { en: 'Review booking',   de: 'Buchung prüfen',       es: 'Revisar reserva',     it: 'Rivedi prenotazione'  },
  'modal.s1.subtitle': { en: 'Check the details, then add your players.', de: 'Details prüfen und Spieler hinzufügen.', es: 'Revisa los detalles y añade a tus jugadores.', it: 'Controlla i dettagli e aggiungi i giocatori.' },
  'modal.s1.court':    { en: 'Court',    de: 'Platte',    es: 'Pista',    it: 'Campo'       },
  'modal.s1.date':     { en: 'Date',     de: 'Datum',     es: 'Fecha',    it: 'Data'        },
  'modal.s1.time':     { en: 'Time',     de: 'Zeit',      es: 'Hora',     it: 'Ora'         },
  'modal.s1.duration': { en: 'Duration', de: 'Dauer',     es: 'Duración', it: 'Durata'      },
  'modal.s1.total':    { en: 'Total',    de: 'Gesamt',    es: 'Total',    it: 'Totale'      },
  'modal.s1.players':  { en: 'Add players', de: 'Spieler hinzufügen', es: 'Añadir jugadores', it: 'Aggiungi giocatori' },
  'modal.s1.optional': { en: 'optional', de: 'optional',  es: 'opcional', it: 'opzionale'   },
  'modal.s1.cancel':   { en: 'Cancel',   de: 'Abbrechen', es: 'Cancelar', it: 'Annulla'     },
  'modal.s1.next':     { en: 'Continue to payment', de: 'Weiter zur Zahlung', es: 'Continuar al pago', it: 'Continua al pagamento' },
  'modal.s1.search':   { en: 'Search by name…', de: 'Nach Name suchen…', es: 'Buscar por nombre…', it: 'Cerca per nome…' },
  'modal.s1.add':      { en: 'Add', de: 'Hinzufügen', es: 'Añadir', it: 'Aggiungi' },

  // ── BOOKING — MODAL STEP 2 ──────────────────────────────────────────────────
  'modal.s2.title':    { en: 'Payment',         de: 'Zahlung',          es: 'Pago',              it: 'Pagamento'         },
  'modal.s2.subtitle': { en: "Choose how you'd like to pay.", de: 'Wähle deine Zahlungsmethode.', es: 'Elige cómo quieres pagar.', it: 'Scegli come vuoi pagare.' },
  'modal.s2.saved':    { en: 'Saved cards',     de: 'Gespeicherte Karten', es: 'Tarjetas guardadas', it: 'Carte salvate'  },
  'modal.s2.newcard':  { en: 'New card',        de: 'Neue Karte',        es: 'Nueva tarjeta',     it: 'Nuova carta'      },
  'modal.s2.cardnum':  { en: 'Card number',     de: 'Kartennummer',      es: 'Número de tarjeta', it: 'Numero carta'     },
  'modal.s2.expiry':   { en: 'Expiry',          de: 'Ablaufdatum',       es: 'Caducidad',         it: 'Scadenza'         },
  'modal.s2.cvc':      { en: 'CVC',             de: 'CVC',               es: 'CVC',               it: 'CVC'              },
  'modal.s2.name':     { en: 'Name on card',    de: 'Name auf der Karte',es: 'Nombre en la tarjeta', it: 'Nome sulla carta' },
  'modal.s2.save':     { en: 'Save card for future bookings', de: 'Karte für zukünftige Buchungen speichern', es: 'Guardar tarjeta para futuras reservas', it: 'Salva carta per prenotazioni future' },
  'modal.s2.back':     { en: '← Back',          de: '← Zurück',          es: '← Atrás',           it: '← Indietro'       },
  'modal.s2.pay':      { en: 'Pay',             de: 'Zahlen',            es: 'Pagar',             it: 'Paga'             },
  'modal.s2.secure':   { en: 'Payments are encrypted and secure', de: 'Zahlungen sind verschlüsselt und sicher', es: 'Los pagos están cifrados y son seguros', it: 'I pagamenti sono crittografati e sicuri' },
  'modal.s2.processing': { en: 'Processing…',  de: 'Wird verarbeitet…', es: 'Procesando…',       it: 'Elaborazione…'    },

  // ── BOOKING — MODAL STEP 3 ──────────────────────────────────────────────────
  'modal.s3.title':    { en: "You're booked!", de: 'Gebucht!',          es: '¡Reservado!',       it: 'Prenotato!'        },
  'modal.s3.sub':      { en: 'Your court is reserved. See you on the court!', de: 'Dein Platz ist reserviert. Bis auf dem Platz!', es: '¡Tu pista está reservada. ¡Hasta en la pista!', it: 'Il tuo campo è prenotato. A presto in campo!' },
  'modal.s3.done':     { en: 'Done',           de: 'Fertig',            es: 'Listo',             it: 'Fatto'             },

  // ── BOOKING — MODAL STEP LABELS ─────────────────────────────────────────────
  'step.review':   { en: 'Review',  de: 'Prüfen',  es: 'Revisar', it: 'Revisiona' },
  'step.payment':  { en: 'Payment', de: 'Zahlung', es: 'Pago',    it: 'Pagamento' },
  'step.confirm':  { en: 'Confirm', de: 'Bestätigen', es: 'Confirmar', it: 'Conferma' },

  // ── BOOKING — SUCCESS DETAIL LABELS ─────────────────────────────────────────
  'detail.court':    { en: 'Court',    de: 'Platte',   es: 'Pista',    it: 'Campo'   },
  'detail.date':     { en: 'Date',     de: 'Datum',    es: 'Fecha',    it: 'Data'    },
  'detail.time':     { en: 'Time',     de: 'Zeit',     es: 'Hora',     it: 'Ora'     },
  'detail.duration': { en: 'Duration', de: 'Dauer',    es: 'Duración', it: 'Durata'  },
  'detail.paid':     { en: 'Paid',     de: 'Bezahlt',  es: 'Pagado',   it: 'Pagato'  },
  'detail.players':  { en: 'Players',  de: 'Spieler',  es: 'Jugadores',it: 'Giocatori' },

  // ── BOOKING — PLAYER SEARCH ──────────────────────────────────────────────────
  'player.member':    { en: 'Member',         de: 'Mitglied',          es: 'Miembro',           it: 'Membro'            },
  'player.guest':     { en: 'Guest',          de: 'Gast',              es: 'Invitado',          it: 'Ospite'            },
  'player.notmember': { en: 'Not a member',   de: 'Kein Mitglied',     es: 'No es miembro',     it: 'Non è membro'      },

  // ── BOOKING — SLOT LOCKING ───────────────────────────────────────────────────
  'lock.legend':    { en: 'Being booked',        de: 'Wird gebucht',          es: 'En proceso de reserva',  it: 'In prenotazione'         },
  'lock.held':      { en: 'Held for you',         de: 'Für dich reserviert',   es: 'Reservado para ti',      it: 'Riservato per te'        },
  'lock.countdown': { en: 'Time to complete payment', de: 'Zeit zum Bezahlen',  es: 'Tiempo para pagar',      it: 'Tempo per il pagamento'  },
  'lock.expired.title': { en: 'Your slot has expired', de: 'Dein Slot ist abgelaufen', es: 'Tu turno ha expirado', it: 'Il tuo slot è scaduto' },
  'lock.expired.sub':   { en: 'The 10-minute hold on this slot has ended. Please select a new time.',
                           de: 'Die 10-Minuten-Reservierung dieses Slots ist abgelaufen. Bitte wähle eine neue Zeit.',
                           es: 'La reserva de 10 minutos de este turno ha terminado. Por favor elige otro horario.',
                           it: 'Il blocco di 10 minuti su questo slot è terminato. Seleziona un nuovo orario.' },
  'lock.expired.btn':   { en: 'Choose another slot', de: 'Neuen Slot wählen', es: 'Elegir otro turno', it: 'Scegli un altro slot' },

  // ── BOOKING — TOAST MESSAGES ─────────────────────────────────────────────────
  'toast.hours':    { en: 'Courts are only available 7:00 AM – 11:00 PM', de: 'Platten sind nur von 7:00 bis 23:00 Uhr verfügbar', es: 'Las pistas solo están disponibles de 7:00 a 23:00', it: 'I campi sono disponibili solo dalle 7:00 alle 23:00' },
  'toast.conflict': { en: 'That slot overlaps an existing booking', de: 'Dieser Slot überschneidet eine bestehende Buchung', es: 'Ese turno se superpone con una reserva existente', it: 'Quella fascia si sovrappone a una prenotazione esistente' },
  'toast.gap':      { en: 'This would leave a 30-min gap — extend or shrink your booking to avoid it', de: 'Das würde eine 30-min-Lücke hinterlassen — Buchung anpassen', es: 'Esto dejaría un hueco de 30 min — ajusta tu reserva', it: 'Questo lascerebbe un buco di 30 min — modifica la prenotazione' },
  'toast.confirmed':{ en: 'Booking confirmed!', de: 'Buchung bestätigt!', es: '¡Reserva confirmada!', it: 'Prenotazione confermata!' },
};

// ─── Engine ──────────────────────────────────────────────────────────────────

const SUPPORTED = ['en', 'de', 'es', 'it'];
const LANG_LABELS = { en: 'EN', de: 'DE', es: 'ES', it: 'IT' };
const LANG_NAMES  = { en: 'English', de: 'Deutsch', es: 'Español', it: 'Italiano' };

let currentLang = localStorage.getItem('ppg_lang') || 'en';
if (!SUPPORTED.includes(currentLang)) currentLang = 'en';

// Expose helpers globally so page scripts can use them
window.i18n = {
  t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) { console.warn(`i18n: missing key "${key}"`); return key; }
    return entry[currentLang] || entry['en'] || key;
  },
  lang() { return currentLang; },
  setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('ppg_lang', lang);
    applyTranslations();
    updateLangSelector();
    // Dispatch so page scripts can react (e.g. re-render dynamic content)
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  },
};

function applyTranslations() {
  document.documentElement.lang = currentLang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = window.i18n.t(key);
    // Preserve child elements (e.g. <em>) — only swap if purely text
    if (el.children.length === 0) {
      el.textContent = val;
    } else {
      // For elements with children (hero title lines with <em>), use innerHTML cautiously
      el.innerHTML = val;
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = window.i18n.t(el.dataset.i18nPlaceholder);
  });

  // Aria labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', window.i18n.t(el.dataset.i18nAria));
  });
}

function updateLangSelector() {
  document.querySelectorAll('.lang-selector').forEach(sel => {
    sel.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    const current = sel.querySelector('.lang-current');
    if (current) current.textContent = LANG_LABELS[currentLang];
  });
}

// ─── Selector HTML injected into every nav ───────────────────────────────────
function buildLangSelector() {
  const wrap = document.createElement('div');
  wrap.className = 'lang-selector';
  wrap.innerHTML = `
    <button class="lang-toggle" aria-label="Select language">
      <span class="lang-current">${LANG_LABELS[currentLang]}</span>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="lang-dropdown">
      ${SUPPORTED.map(l => `
        <button class="lang-option${l === currentLang ? ' active' : ''}" data-lang="${l}">
          <span class="lang-code">${LANG_LABELS[l]}</span>
          <span class="lang-name">${LANG_NAMES[l]}</span>
        </button>`).join('')}
    </div>`;

  // Toggle dropdown
  const toggle = wrap.querySelector('.lang-toggle');
  const dropdown = wrap.querySelector('.lang-dropdown');
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // Pick language
  dropdown.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    window.i18n.setLang(btn.dataset.lang);
    dropdown.classList.remove('open');
  });

  // Close on outside click
  document.addEventListener('click', () => dropdown.classList.remove('open'));

  return wrap;
}

// ─── Init on DOMContentLoaded ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Inject selector into every element with class "nav-lang-slot"
  document.querySelectorAll('.nav-lang-slot').forEach(slot => {
    slot.appendChild(buildLangSelector());
  });
  applyTranslations();
});
