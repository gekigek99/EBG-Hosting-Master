const i18n = new I18n({
    fallback: 'de',
    languages: {
      de: {
        Header: {
          Links: {
            Startseite: "Startseite",
            FAQ: "FAQ",
            Kunden: "Kunden",
            Ausloggen: "Ausloggen",
            Einloggen: "Einloggen",
            Registrieren: "Registrieren",
            Credits: "Credits",
            AdminControl: "Admin Panel"
          },
        },
        Startseite: {

        },
        Login: {
          Form: {
            FormUserLogin: "Login:",
            Email: "E-Mail",
            Passwort: "Passwort",
            Submit: "Einloggen",
            Errors: {
              MissingField: " Feld muss ausgefüllt sein!",
              WrongField: " Feld hat keinen gültigen Wert, bitte überprüfen!",
              MinPassword: "Das Passwort braucht minderstens 10 Zeichen",
              WrongPassword: "Der Nutzer existiert nicht oder das Passwort ist falsch"
            }
          }
        },
        Registrieren: {
          Form: {
            FormUserReg: "Registrierung:",
            Email: "E-Mail",
            Passwort: "Passwort",
            RPasswort: "Passwort wiederholen",
            Submit: "Registrieren",
            Errors: {
              PasswordMissmatch: "Passwörter stimmen nicht überein oder sind leer!",
              MissingField: " Feld muss ausgefüllt sein!",
              WrongField: " Feld hat keinen gültigen Wert, bitte überprüfen!",
              MissingToken: "Dieser Host ist privat! Eine Regestrierung ist ohne Token nicht möglich. Bitte fragen Sie einen Admin.",
              InvalidToken: "Der Token ist ungültig oder abgelaufen. Bitte fragen Sie einen Admin.",
              ConfirmLegal: "Du musst die ABG und Datenschutzbestimmung akzeptierne.",
              UserTaken: "Die Nutzer ID ist bereits vergeben."
            }
          }
        },
        Credits: {
          Headline: "Status von",
          WeeklyCoins: "Wöchentliche Credits",
          CoinsPopup: "Du hast {{AddedCoins}} Credits bekommen.",
          CoinsPopupErrors: {
            LessThanAWeek: "Es sind noch keine 7 Tage vergangen, warte bis: {{TimeStamp}}",
            TooManyRequests: "Bitte warte 15 Minuten.",
            Database: "Fehler: 500 (Kontaktiere einen admin)"
          },
          Errors: {
            CommunicationError: "Die Credits konnten nicht geladen werden...",
            UserDoesNotExist: "Es konnte kein Nutzer im Gamepanel gefunden werden!"
          }
        },
        Kunden: {
          Errors: {
            CommunicationError: "Die Nutzer konnten nicht abgerufen werden..."
          }
        },
        AdminControl: {
          APITokenError: {
            Error: "Die Tokens konnten nicht geladen werden..."
          },
          Form: {
            FormCreateAPiToken: "API Token erstellen:",
            TokenField: "API Token wird hier erscheinen...",
            Permission: "Rechte",
            Submit: "Token Erstellen",
            Errors: {
              MissingField: " Feld muss ausgefüllt sein!",
              WrongField: " Feld hat keinen gültigen Wert, bitte überprüfen!",
              NotEnothPermissions: "Du hast keine Rechte dieses Token zu erstellen"
            }
          }
        },
        Tabeles: {
          KundenListe: {
            email: "E-Mail",
            admin: "Admin",
            panelid: "Panel ID",
            coinsperweek: "Credits pro Woche",
            maxcoins: "Max Credits"
          },
          APITokenListe: {
            email: "E-Mail",
            permissions: "Rechte",
            token: "Token",
            button_deletAPIToken: "Löschen"
          }
        }
      },
      en: {
        Header: {
          Links: {
            Startseite: "Mainpage",
            FAQ: "FAQ",
            Kunden: "Customers",
            Ausloggen: "Logout",
            Einloggen: "Login",
            Registrieren: "Register",
            Credits: "Credits",
            AdminControl: "Admin Panel"
          },
        },
        Startseite: {

        },
        Login: {
          Form: {
            FormUserLogin: "Login:",
            Email: "E-Mail",
            Passwort: "Password",
            Submit: "Login",
            Errors: {
              MissingField: " Field must be filled out!",
              WrongField: " Field has no valid value, please check!",
              MinPassword: "The password needs at least 10 characters",
              WrongPassword: "The user does not exist or the password is incorrect"
            }
          }
        },
        Registrieren: {
          Form: {
            FormUserReg: "Registration:",
            Email: "E-Mail",
            Passwort: "Password",
            RPasswort: "Password recovery",
            Submit: "Registration",
            Errors: {
              PasswordMissmatch: "Passwords do not match or are empty!",
              MissingField: " Field must be filled out!",
              WrongField: " Field has no valid value, please check!",
              MissingToken: "This host is private! Registration is not possible without a token. Please ask an admin.",
              InvalidToken: "The token is invalid or has expired. Please ask an admin.",
              ConfirmLegal: "You have to accept the General Terms and Conditions and data protection regulations.",
              UserTaken: "The user ID has already been assigned."
            }
          }
        },
        Credits: {
          Headline: "Status of",
          WeeklyCoins: "Weekly Credits",
          CoinsPopup: "You got {{AddedCoins}} Credits.",
          CoinsPopupErrors: {
            LessThanAWeek: "It's not been 7 days yet, wait until: {{TimeStamp}}",
            TooManyRequests: "Please wait 15 minutes.",
            Database: "Error: 500 (Contact an admin)"
          },
          Errors: {
            CommunicationError: "The credits could not be loaded ...",
            UserDoesNotExist: "No user could be found in the game panel!"
          }
        },
        Kunden: {
          Errors: {
            CommunicationError: "The users could not be retrieved ..."
          }
        },
        AdminControl: {
          APITokenError: {
            Error: "The tokens could not be loaded ..."
          },
          Form: {
            FormCreateAPiToken: "Create API token:",
            TokenField: "API Token will appear here ...",
            Permission: "Permissions",
            Submit: "Create Token",
            Errors: {
              MissingField: " Field must be filled out!",
              WrongField: " Field has no valid value, please check!",
              NotEnothPermissions: "You have no permissions to create this token"
            }
          }
        },
        Tabeles: {
          KundenListe: {
            email: "E-Mail",
            admin: "Admin",
            panelid: "Panel ID",
            coinsperweek: "Credits per Week",
            maxcoins: "Max Credits"
          },
          APITokenListe: {
            email: "E-Mail",
            permissions: "Permissions",
            token: "Token",
            button_deletAPIToken: "Delete"
          }
        }
      },
      it: {
        Header: {
          Links: {
            Startseite: "Pagina principale",
            FAQ: "FAQ",
            Kunden: "Customers",
            Ausloggen: "Esci",
            Einloggen: "Accesso",
            Registrieren: "Registrati",
            Credits: "Crediti",
            AdminControl: "Pannello Amministratore"
          },
        },
        Startseite: {

        },
        Login: {
          Form: {
            FormUserLogin: "Login:",
            Email: "E-Mail",
            Passwort: "Password",
            Submit: "Accesso",
            Errors: {
              MissingField: " Il campo deve essere compilato!",
              WrongField: " Il campo non contiene un valore valido, si prega di controllare!",
              MinPassword: "La password richiede almeno 10 caratteri",
              WrongPassword: "L'utente non esiste o la password è incorretta"
            }
          }
        },
        Registrieren: {
          Form: {
            FormUserReg: "Registrazione:",
            Email: "E-Mail",
            Passwort: "Password",
            RPasswort: "Recupero password",
            Submit: "Registrazione",
            Errors: {
              PasswordMissmatch: "Le password non corrispondono o mancanti!",
              MissingField: " Il campo deve essere compilato!",
              WrongField: " Il campo non contiene un valore valido, si prega di controllare!",
              MissingToken: "Questo host è privato! La registrazione non è possibile senza token. Si prega di chiedere a un amministratore.",
              InvalidToken: "Il token non è valido o è scaduto. Si prega di chiedere a un amministratore.",
              ConfirmLegal: "Devi accettare i Termini e Condizioni Generali e le norme sulla protezione dei dati.",
              UserTaken: "L'ID utente è già stato assegnato."
            }
          }
        },
        Credits: {
          Headline: "Lo stato di",
          WeeklyCoins: "Weekly Credits",
          CoinsPopup: "Hai {{AddedCoins}} Crediti.",
          CoinsPopupErrors: {
            LessThanAWeek: "Non sono ancora passati 7 giorni, aspettare fino a: {{TimeStamp}}",
            TooManyRequests: "Si prega di attendere 15 minuti.",
            Database: "Errore: 500 (Contattare un amministratore)"
          },
          Errors: {
            CommunicationError: "Impossibile caricare i crediti ...",
            UserDoesNotExist: "Nessun utente è stato trovato nel pannello di gioco!"
          }
        },
        Kunden: {
          Errors: {
            CommunicationError: "Impossibile recuperare gli utenti ..."
          }
        },
        AdminControl: {
          APITokenError: {
            Error: "Impossibile caricare i crediti ..."
          },
          Form: {
            FormCreateAPiToken: "Crea un token API:",
            TokenField: "Il token API apparirà qui ...",
            Permission: "Autorizzazioni",
            Submit: "Crea token",
            Errors: {
              MissingField: " Il campo deve essere compilato!",
              WrongField: " Il campo non contiene un valore valido, si prega di controllare!",
              NotEnothPermissions: "Non hai permessi per creare questo token"
            }
          }
        },
        Tabeles: {
          KundenListe: {
            email: "E-Mail",
            admin: "Amministratore",
            panelid: "ID pannello",
            coinsperweek: "Crediti a settimana",
            maxcoins: "Crediti massimi"
          },
          APITokenListe: {
            email: "E-Mail",
            permissions: "Autorizzazioni",
            token: "Token",
            button_deletAPIToken: "Cancella"
          }
        }
      }
    }
});

/**
 * Will translate a key value to the language of the token
 * @param {string} Key Object Key to translate
 * @param {object} Variables
 * @returns {string} Transladed String
 */
function translate(Key, Variables){
  if(Variables){
    return i18n.translate(localStorage.getItem('Language'), Key, Variables);
  }else{
    return i18n.translate(localStorage.getItem('Language'), Key);
  }
}

function convertFlags(lang_string){
  if(lang_string === "de"){
    return "🇩🇪";
  }else if(lang_string === "en"){
    return "🇬🇧";
  }else if(lang_string === "ua"){
    return "🇺🇦";
  }else if(lang_string === "it"){
    return "🇮🇹";
  }else{
    return lang_string
  }
}

function setLanguageKey(){
  if(!localStorage.getItem('Language')){
    let userLang = navigator.language.substring(0,2).toLocaleLowerCase() || navigator.userLanguage.substring(0,2).toLocaleLowerCase(); 
    localStorage.setItem('Language', userLang)
  }
}

setLanguageKey()