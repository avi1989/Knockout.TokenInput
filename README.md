Knockout.TokenInput
===================

This is a Knockout Binding for the Jquery.Tokeninput control (http://loopj.com/jquery-tokeninput/). 

The control is very simple to use and allows any of the configurations mentioned in the website above to be used. An example will be added to the git repo soon as will a jsfiddle.
'''
<input type="text" data-bind="ko_tokenInput: list,
    settings: {
        url: '/api/SampleDataApi/TokenSearch/',
        disabled: false,
        minChars: 2,
        queryParam: q,
    }
"/>
'''

