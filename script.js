
// GIK339 - Labb 1
// JavaScript intro, variabler och funktioner


// ========================================
// Uppgift 2 - Variabler och scope
// ========================================

// Skriver ut var innan deklarationen
console.log("Före blocket:", varValue);

{
    var varValue = "Jag är var";
    let letValue = "Jag är let";
    const constValue = "Jag är const";

    // Skriver ut variablerna inne i blocket
    console.log("Inuti blocket:");
    console.log(varValue);
    console.log(letValue);
    console.log(constValue);
}

// var går att använda även utanför blocket
console.log("Efter blocket:", varValue);

// let och const går inte att använda utanför blocket
// console.log(letValue);
// console.log(constValue);


/*
Reflektion uppgift 2:

var är inte block-scopad utan kan användas utanför ett vanligt
block. let och const är block-scopade och kan bara användas
i blocket där de deklarerades.

let kan tilldelas ett nytt värde medan const inte kan
tilldelas om.

Om console.log används före deklarationen av var kan värdet
bli undefined på grund av hoisting. För let och const får
man ReferenceError om man försöker använda dem före
deklarationen eftersom de befinner sig i Temporal Dead Zone.

Inuti blocket fungerar alla tre variablerna. Efter blocket
fungerar var, men inte let och const.
*/


// ========================================
// Uppgift 3 - Funktion för att addera tal
// ========================================

const add = (num1, num2) => {

    // ========================================
    // Uppgift 4 - Jämförelser och specialvärden
    // ========================================

    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);

    // Kontrollerar om num1 är truthy eller falsy
    console.log(num1 ? "truthy" : "falsy");

    // Kontrollerar att båda värdena är giltiga nummer
    if (
        num1 !== null &&
        num1 !== undefined &&
        num2 !== null &&
        num2 !== undefined &&
        typeof num1 === "number" &&
        typeof num2 === "number" &&
        !Number.isNaN(num1) &&
        !Number.isNaN(num2)
    ) {
        // Returnerar summan av talen
        return num1 + num2;
    } else {
        console.log("Felaktig input");
        return undefined;
    }
};


/*
Reflektion uppgift 3:

Om jag hade använt let istället för const hade jag kunnat
tilldela variabeln add en annan funktion senare.

En funktionsdeklaration hade sett ut så här:

function add(num1, num2) {
    return num1 + num2;
}

Return betyder att funktionen skickar tillbaka ett värde
till den kod som anropade funktionen. Värdet kan sparas
i en variabel eller användas direkt.
*/


/*
Reflektion uppgift 4:

En ternary operator är ett kortare sätt att skriva ett
villkor. Den använder ? och : för att välja mellan två
olika värden.

Exempel:
num1 ? "truthy" : "falsy"

En if-sats kan innehålla flera instruktioner medan
ternary operator passar bra för enklare villkor.

== jämför värden och kan omvandla datatyper.
=== jämför både värde och datatyp.

Jag använder !== för att kontrollera att värdena inte
är null eller undefined. Med && måste alla villkor
vara sanna för att if-satsen ska köras.

typeof kontrollerar att båda värdena är nummer.
Number.isNaN kontrollerar att värdena inte är NaN.
*/


// ========================================
// Uppgift 5 - Anropa funktioner
// ========================================

const num1 = 0;
let arg1;
let sum = false;

// Test 1: argumenten sum och 1
console.log("Test 1:", add(sum, 1));

// Test 2: argumenten "0" och 3
sum = add("0", 3);
console.log("Test 2:", sum);

// Test 3: argumenten 3 och "num1"
sum = add(3, "num1");
console.log("Test 3:", sum);

// Test 4: argumenten -5 och num1
sum = add(-5, num1);
console.log("Test 4:", sum);

// Test 5: argumenten arg1 och 7
sum = add(arg1, 7);
console.log("Test 5:", sum);

// Test 6: anrop utan argument
sum = add();
console.log("Test 6:", sum);

// Valfritt anrop
sum = add(10, 20);
console.log("Valfritt test:", sum);

// Skriver ut variablerna sist
console.log("num1 sist:", num1);
console.log("sum sist:", sum);


/*
Reflektion uppgift 5:

En parameter är ett namn som står i funktionens definition,
exempelvis num1 och num2.

Ett argument är det faktiska värde som skickas in vid
funktionsanropet.

En variabel används för att lagra ett värde.

Test 1:
false och 1 skickas in. false är en boolean och inte
ett nummer. Resultatet blir undefined.

Test 2:
"0" är en sträng och inte ett nummer. Resultatet blir
undefined.

Test 3:
3 är ett nummer men "num1" är en sträng.
Resultatet blir undefined.

Test 4:
-5 och num1 skickas in. num1 har värdet 0.
Båda är nummer och summan blir -5.

Test 5:
arg1 har inget värde och är därför undefined.
Resultatet blir undefined.

Test 6:
Inga argument skickas in. Båda parametrarna blir
undefined. Resultatet blir undefined.

Det valfria testet adderar 10 och 20 och returnerar 30.

num1 är fortfarande 0 eftersom den deklarerades med const.
sum får värdet 30 från det sista anropet.
*/


// ========================================
// Uppgift 6 - Extra: Räknare
// ========================================

// Frågar användaren efter två tal
const input1 = prompt("Ange det första talet:");
const input2 = prompt("Ange det andra talet:");


// Funktion som räknar ut differens, produkt och jämförelse
function calculate(number1, number2) {

    const difference = number1 - number2;
    const product = number1 * number2;
    const same = number1 === number2;

    // Returnerar resultatet som ett objekt
    return {
        difference: difference,
        product: product,
        same: same
    };
}


// Kontrollerar att användaren har skrivit giltiga tal
if (
    input1 !== null &&
    input1.trim() !== "" &&
    input2 !== null &&
    input2.trim() !== "" &&
    Number.isFinite(Number(input1)) &&
    Number.isFinite(Number(input2))
) {

    // Omvandlar strängarna till nummer
    const number1 = Number(input1);
    const number2 = Number(input2);

    // Anropar funktionen
    const result = calculate(number1, number2);

    // Skriver ut resultatet som en tabell
    console.table(result);

} else {

    // Meddelande om input är felaktig
    console.log("Ogiltig input. Ange två giltiga tal.");
}


/*
Reflektion uppgift 6:

En sträng är enkel att skriva ut direkt, men svår att
använda vidare eftersom värdena är sammanslagna till text.

En array kan samla flera värden i en lista. Nackdelen
är att det kan vara svårt att veta vad varje position
betyder.

Ett objekt är tydligare eftersom varje värde har ett
eget namn. Därför valde jag ett objekt i denna uppgift.

Koden hade kunnat skrivas på ett bättre sätt genom
att separera input, kontroll och beräkningar.

Det är bra att calculate bara utför beräkningarna
och returnerar resultatet. Då blir funktionen enklare
att förstå och återanvända.
*/
