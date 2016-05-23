#Button watch

Simple plugin without the dependencies that watching on the keyboard events and responds your setted behavior.

The object of the plugin has two names «buttonWatch» and short variant «bw».

For plugin initialization enter code
buttonWatch.turnOn();

For "turning off"
buttonWatch.turnOff();

#Setting behavior for reaction to keyboard events
To set the behavior on keydown
	buttonWatch.down(buttons, function);
To set the behavior on keyup
	buttonWatch.up(buttons, function);
To set the behavior on keypress
	buttonWatch.press(symbols, function);

To set the behavior on pressing at one time a few buttons
	buttonWatch.combo(buttons, function);
To set the behavior on sequence of pressing a few buttons. Limited to 13 characters.
	buttonWatch.sequenceCombo(buttons, function);
To set the behavior on typing text string. Limited to 13 characters.
	buttonWatch.write(text, function);

buttons - an array of button names or keyCode.
	In the array can be specified as the name of the buttons (string), and their keyCode (number). The names of the buttons are only available in English layout in lowercase.
	For example
	buttonWatch.down(['r', 'o', 70, 13] function() {console.log('Hi there!')});
symbols - an array of symbols.
	Array elements can be any character that can be entered from the keyboard.
	Pay attention! The following commands are not identical.
	buttonWatch.press(['q'] function() {console.log('Hi there!')});
	buttonWatch.press(['Q'] function() {console.log('Hi there!')});
	buttonWatch.press(['й'] function() {console.log('Hi there!')});
text - a text string.
	It may contain any characters that can be entered from the keyboard.
function - function, which performance is set for reaction on event.
	If the function is not specified, the behavior for «buttons» and «symbols» items will be deleted!



[Virtual keyboard](http://dmauro.github.io/Keypress/)
[Test stand](https://learn.javascript.ru/keyboard-events#keyboard-test-stand) where you can find keyCode of keyboard-events.

------------------------------------------------------------------

Простий плагін без залежностей, що стежить за подіями клавіатури і реагує на них заданою вами поведінкою.

Об'єкт плагіна має два імені «buttonWatch» і короткий варіант «bw».

Для ініціалізації плагіну ввести код
buttonWatch.turnOn();

Щоб його "вимкнути"
buttonWatch.turnOff();


#Встановлення поведінки для реакції на події клавіатури
Для встановлення поведінки на keydown
	buttonWatch.down(buttons, function);
Для встановлення поведінки на keyup
	buttonWatch.up(buttons, function);
Для встановлення поведінки на keypress
	buttonWatch.press(symbols, function);

Для встановлення поведінки на одночасне натиснення декількох кнопок
	buttonWatch.combo(buttons, function);
Для встановлення поведінки на послідовність натискань декількох кнопок. Обмежено 13 символами.
	buttonWatch.sequenceCombo(buttons, function);
Для встановлення поведінки на введення текстової стрічки. Обмежено 13 символами.
	buttonWatch.write(text, function);

buttons - масив назв кнопок або їх keyCode.
	У масиві можуть бути вказані як назви кнопок (string), так і їх keyCode (number). Назви кнопок задаються тільки у англійській розкладці у нижньому регістрі.
	Наприклад
	buttonWatch.down(['r', 'o', 70, 13] function() {console.log('Hi there!')});
symbols - масив символів.
	Елементом масива може бути будь який символ, який можна ввести з клавіатури.
	Зверніть увагу! Наступні команди не є ідентичними.
	buttonWatch.press(['q'] function() {console.log('Hi there!')});
	buttonWatch.press(['Q'] function() {console.log('Hi there!')});
	buttonWatch.press(['й'] function() {console.log('Hi there!')});
text - текстова стрічка.
	Може містити будь які символи, які можна ввести з клавіатури.
function - функція, виконання якої задається для реакції на подію.
	Якщо функція не задана, то видаляється поведінка для елементів buttons та symbols



[Віртуальна клавіатура](http://dmauro.github.io/Keypress/) та
[Тестовий стенд](https://learn.javascript.ru/keyboard-events#keyboard-test-stand) де ви можете знайти keyCode подій клавіатури.