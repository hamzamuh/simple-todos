Template.dropdown_menu.helpers({
    categories: function(){
        // Return a list of registered emails here
        return ["Here", "Would", "Be", "A", "List", "Of", "Registered", "Users"]
    }
});

Template.dropdown_menu.events({
    "change #category-select": function (event, template) {
        var category = $(event.currentTarget).val();
        console.log("category : " + category);
    }
});
