# Preisrunter Scriptable iOS Widget

Dieses Script ermöglicht es, den Warenkorb von Preisrunter in einem iOS Widget mit der App Scriptable anzuzeigen. Diese Funktion soll in einer künftigen Preisrunter-App für iOS integriert werden. Dieses Script soll aber eine Übergangslösung bieten.

## Voraussetzungen
- [Scriptable-App für iOS](https://apps.apple.com/de/app/scriptable/id1405459188)
- [Einkaufsliste/Warenkorb auf Preisrunter](https://preisrunter.at/warenkorb/) und dazugehöriger Warenkorb-Name im Format *apfel-kirsche-birne-kokosnuss*

## Schritt-für-Schritt-Anleitung
1. Scriptable-App öffnen
2. rechts oben auf das "+" klicken
3. Code aus der Datei [main.js](https://raw.githubusercontent.com/preisrunter/preisrunter-scriptable-ios-widget/main/main.js) kopieren und einfügen
4. Warenkorb-Name statt "INSERT-CART-NAME-HERE" einsetzen
5. "Fertig" klicken
6. Widget zu Startbildschirm hinzufügen:
   - lang gedrückt halten
   - "Scriptable" auswählen
   - gewünschte Größe wählen
   - hinzufügen klicken
7. Danach das Widget zum Konfigurieren anklicken, "Script" auswählen und dort das gerade angelegte Script wählen
8. "Bei Interaktion" kann gewählt werden, dass eine URL geöffnet werden soll, etwa der Link zum Warenkorb: preisrunter.at/warenkorb/?s=WARENKORB-NAME-HIER-EINSETZEN
9. Fertig!

Dann sollte das Endergebnis so aussehen:

![image](https://github.com/preisrunter/preisrunter-scriptable-ios-widget/assets/32458224/29d48220-9eaf-442d-9e9a-e3f3f0b5d071)

## Hinweise zur Nutzung der Preisrunter API
Weitere Infos gibt es hier: [https://preisrunter.at/api/](https://preisrunter.at/api/)
