var GDTPlus = {};

var showMenuUI = UI._showContextMenu;
var showMenuItem = function(type, menuItems, x, y) {
    var company = GameManager.company;
        menuItems.push({
            label: "GDT+ Menu".localize("menu item"),
            action: function() {
                Sound.click();
                GameManager.resume(false);
                var div = $("#GDTPlusMenuDiv");
                div.scrollTop();
                div.gdDialog({
                    popout: !0,
                    close: !0
                });
            }
        })
    showMenuUI(type, menuItems, x, y);
}
UI._showContextMenu = showMenuItem;