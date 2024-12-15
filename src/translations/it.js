export default {
  //
  //  Local name of the language
  //
  languageLocalName: 'Italiano',

  //
  // General
  //
  title: '3D Code Generator',
  subtitle: 'Esporta codici QR o codici Spotify come STL per la stampa 3D',
  preview: 'Anteprima',
  controlsHint: 'Usa il mouse per ruotare',
  changeLanguage: 'Cambia Lingua',
  contributeTranslation: 'Contribuisci alla traduzione',
  generateButton: 'Genera Modello 3D',
  scrollDownForGuide: 'Scorri verso il basso per leggere la guida su come stampare il tuo codice QR.',
  printabilityWarning: 'Attenzione alla stampabilità del Modello 3D',
  printabilityWarningBody: 'Almeno un bordo dellelemento più piccolo nel modello 3D è molto piccolo: {dimensions}. A seconda della configurazione, la stampa potrebbe risultare più difficile.',
  supportMe: 'Support qrcode2stl',
  viewOnGithub: 'GitHub',
  shareButtonTitle: 'Condividi questa pagina',
  file: 'file',
  no: 'no',
  yes: 'yes',
  top: 'superiore',
  bottom: 'inferiore',
  left: 'sinistra',
  right: 'destra',
  content: 'contenuto',
  min: 'min',
  max: 'max',
  thankYou: 'Grazie mille per il supporto. You rock!',
  promotionTitle: 'Vuoi iniziare un nuovo hobby? Cerchi una seconda/terza stampante 3D?',
  promotionSubtitle: 'Ecco alcune stampanti 3d consigliate e accessori per stampanti 3d per coprirti. Se vuoi supportare lo sviluppo di questo strumento, prendi in considerazione l'utilizzo dei link sottostanti per acquistare su AliExpress.',
  corner: 'angolo',
  isGenerating: 'Generazione Modello 3d...',
  headerShareNotice: 'Condividi il tuo codice con questo URL',
  copyExistingQRCode: 'Copia da QR Code esistente',
  holdQRCodeInView: 'Fissa il QR Code nella visuale camera',
  decodedQRCodeData: 'Decodifica QR Code data',

  //
  // QR Code Options Panel
  //
  qrCodeOptionsTitle: 'Opzioni QR Code',
  qrCodeTextPlaceholder: 'Teto del tuo QR code e.g. Ciao Mondo',
  errorCorrection: 'Correzione errore',
  errorCorrectionHelp: 'Maggiore è il livello di correzione dell errore, più denso è il codice QR.',
  optionalFieldsHint: 'Non tutti i campi devono essere compilati.',
  // Wifi
  ssidPlaceholder: 'Il nome delle rete Wifi',
  password: 'Password',
  passwordPlaceholder: 'La password rete Wifi',
  security: 'Sicurezza',
  hidden: 'nascondi',
  hiddenText: 'SSID è nascosto',
  // Contact
  contact: 'Contatti',
  yourName: 'Il Tuo nome',
  firstname: 'Nome',
  lastname: 'Cognome',
  organization: 'Organizzazione',
  role: 'Ruolo',
  numbers: 'Numero',
  cellphone: 'Cellura',
  phone: 'Telefono',
  street: 'Via',
  city: 'Città',
  state: 'Stato',
  // E-Mail
  recipient: 'Indirizzo',
  recipientPlaceholder: 'L indirizzo hce riceverà la mail',
  subject: 'Oggettp',
  subjectPlaceholder: 'Linea dell oggetto della mail',
  body: 'Teso',
  bodyPlaceholder: 'Contenuto dell E-Mail',
  // SMS
  phonePlaceholder: 'Numero telefono destinatario',
  smsMessage: 'Messaggio',
  smsMessagePlaceholder: 'Testo SMS',

  //
  // Spotify Options Panel
  //
  spotifyOptions: 'Opzioni Generatore Spotify QR Code',
  spotifyUri: 'Spotify URI/Link',
  spotifyUriHelp: 'Puoi ottenere l URI di Spotify per un brano/album/playlist/utente da Spotify facendo clic su "Condividi" e copiare il link.',
  spotifyCodeHeightInfo: 'I codici Spotify hanno un rapporto d aspetto fisso di 4:1',

  //
  // 3D Model Options Panel
  //
  modelOptions: 'Opzioni Modello 3D',
  base: 'Base',
  width: 'Larghezza',
  height: 'Altezza',
  depth: 'Profondità',
  cornerRadius: 'Raggio d angolo',
  border: 'Bordo',
  borderAroundBase: 'Aggiungi bordo intorno la base',
  margin: 'Margini',
  block: 'Blocco',
  style: 'Stile',
  shape: 'Forma',
  rectangle: 'rettangolo',
  roundedRectangle: 'rettangolo arrotondato',
  square: 'square',
  round: 'tondo',
  size: 'Taglia',
  blockSizeHelp: `
  This settings modifies the size of the individual QR code blocks.
  Play around with this value to achieve unique visual looks but keep in mind that this could impact readability of the QR code.\\
  Check the preview with your phone before printing to see if you have gone too far.
  Stay at 100% if you are not sure.
  If you increase this value above 100% (e.g. 120%) the blocks will form connected islands that make the QR code easier to print.`,
  icon: 'Icon',
  noIcon: 'No icon',
  iconSizeHelp: `
  The size of the icon relative to the total width of the QR Code.
  The icon abuses the inbuilt error correction of the qr code. If it is too big the code may not be readable.
  If you want to have a big icon but your phone can't read the QR code you can try to increase the Error Correction Level.`,
  text: 'Text',
  textOnEdge: 'Add a custom title text to your QR code.',
  placement: 'Placement',
  theText: 'Regular line\n*Italic line*\n**Bold line**\n***Italic & Bold line***',
  fontInfoText: 'Change the font for individual lines:',
  italicInfoText: '*italics*',
  boldInfoText: '**bold**',
  cityMode: 'QR-City',
  cityModeText: 'Randomly alters the height of the blocks.',
  invert: 'Invert',
  invertText: 'Inverts the structure of the code',
  keychain: 'Keychain',
  keychainHelp: 'Attach hole to the side of the tag (e.g. to attach it to your keychain).',
  mirrorHoles: 'Mirror Holes',
  mirrorHolesHelp: 'Mirror the holes to the opposite side (e.g. to fix it with screws).',
  keychainHoleDiameter: 'Hole Diameter',
  nfcIndentation: 'NFC/RFID',
  nfcIndentationHelp: 'Adds an indentation on the bottom side of the base where one can insert an NFC/RFID tag.',
  indentation: 'Indentation',
  nfcIndentationHiddenHelp: 'Creates a cavity inside the base with a 1mm offset from the bottom of the base. This allows you to firmly embed the NFC tag inside the 3d print itself. Pause printing before the closing layer, insert the tag, then resume printing. Make sure that the indentation depth is slightly larger than the tag itself and adjust base depth accordingly.',

  //
  // Export Settings
  //
  exportTypeHelp: 'Just leave this as "binary" to keep file size low. If your software has issues with the generated file, you can try to change this option.',
  exportSeparatePartsHelp: 'If set to "yes" the base and the qr code will be saved as two separate parts for printers with dual extrusion printing. Your browser may ask for permissions to download multiple files.',
  separateParts: 'Separate parts',
  saveAsButton: 'Export to STL',
  saveAsImageButton: 'Render to PNG',

  //
  // Print Guide
  // with HTML Tags included!
  //
  printGuideTitle: '3D Print Guide',
  printGuideSubtitle: 'How to print a dual color QR code with a single extruder 3d printer?',
  printGuideWIPInfo: 'This guide is a work in progress.',
  printGuideIntro: `
  You can print multi colored objects even with a single extruder by swapping the filament at specific layers.<br/>
  We can use this method to print the base of our QR code and the actual QR code part on the top in two different colors.<br/>
  This technique is what makes 3d printable QR codes possible in the first place.<br/>
  The process is different depending on the slicer software you are using.<br/>
  In this guide I will focus on Cura and PrusaSlicer only and I am taking no responsibility whatsoever if you somehow damage your printer in the process.<br/>`,
  printGuideSupportWarningTitle: 'Keep in mind: Not all printers/firmwares support the necessary functionality!',
  printGuideSupportWarningMessage: `
  This is meant as a general guide, as I can't provide a writeup on every printer/firmware combination out there.<br/>
  I recommend doing a small test print first. If you are having problems getting this to work, please search online if your specific printer model supports the <strong>M600</strong> G-Code command for filament changing.<br/>`,
  printGuideGenerateQRCode: 'Generating the QR code',
  printGuideGenerateQRCodeSteps: `
  <li>Select the type of QR code you want to generate under "QR Code Options".</li>
  <li>Fill out the necessary fields.</li>
  <li>Configure the 3d model under "3D Model Options".</li>
  <li>Click on "Generate 3D Model"</li>
  <li>Save the stl file via the "Save As STL" button in the top right.</li>`,
  printGuideVersionDisclaimer: 'Version {version}, your experience can differ.',
  // Cura
  printGuideCuraStep1: `
  Slice the model and locate the layer where the color change should happen.<br/>
  In my case this is at layer 16.<br/>`,
  printGuideCuraStep2: `
  <li>Go to "Extensions -> Post Processing -> Modify G-Code".</li>
  <li>Click on "Add a script" then select "Filament Change".</li>
  <li>In the Filament Change settings, set the "Layer" value to your layer number from step 1.</li>
  <li>Re-Slice your model. The icon left of the "Slice" button indicates an active Post Processing script.</li>`,
  // PrusaSlicer
  printGuidePrusaSlicerStep1: `
  Slice the model and locate the layer where the color change should happen.<br/>
  In my case this is at layer 11.<br/>`,
  printGuidePrusaSlicerStep2: `
  <li>Click on the little plus sign right of the layer selection bar.</li>
  <li>PrusaSlicer gives you a nice preview where you can see the different colors to verify that you selected the right layer. The qr code parts should have a different color than the base</li>
  <li>Re-Slice your model.</li>`,
  printGuideStep3: `
  You can now print the model as usual.<br/>
  The 3d printer will pause on the specified layer and move to the origin of the print bed.
  Now you can swap the filament and restart the print job from your printers menu.`,

};
