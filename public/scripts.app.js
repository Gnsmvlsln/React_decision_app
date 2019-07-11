'use strict';

var app = {
    title: 'Indecision App',
    subTitle: 'This is a demo test',
    options: []
};

// console.log("App.js is running")

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('demo');

var renderApp = function renderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            'Subtitle : ',
            app.subTitle
        ),
        app.options && app.options.length > 0 ? "Here are your options" : "No options",
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            null,
            'What should i Do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (number) {
                return React.createElement(
                    'li',
                    { key: number },
                    number
                );
                render();
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Submit'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();
