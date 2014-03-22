ko.bindingHandlers.ko_tokenInput = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        debugger;
        this.settings = allBindingsAccessor().settings;
        var self = this;
        var url = settings.url;
        this.items = valueAccessor();
        element.isUpdating = false;
        $(element).tokenInput(this.settings.url, $.extend(settings, {
            onAdd: function (item) {
                if (!element.isUpdating) {
                    element.isUpdating = true;
                    try {
                        self.items.push(item);
                    } finally {
                        element.isUpdating = false;
                    }
                }
            },
            onRemove: function(item) {
                if (!element.isUpdating) {
                    element.isUpdating = true;
                    try {
                        self.items.remove(item);
                    } finally {
                        element.isUpdating = false;
                    }
                }
            }
        }));

        this.items.subscribe(function(data) {
        });
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        var params = ko.toJS(valueAccessor());
        debugger;
        if (!element.isUpdating) {
            element.isUpdating = true;
            try {
                $(element).tokenInput("clear");
                for (var i = 0; i < params.length; i++) {
                    $(element).tokenInput("add", params[i]);
                }
            } finally {
                element.isUpdating = false;
            }
        }
    }
};
