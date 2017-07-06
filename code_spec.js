var helperfiles = require('./Helper_files/drag_n_drop.js');



describe('Dragging and dropping', ()=> {
        browser.ignoreSynchronization=true;
    it('should take an element and do drag and drop', ()=> {
         browser.get("https://html5demos.com/drag/");
         var elementtoDrop = element(by.css('a#one'));
         var elementWhereToDrop = element(by.css('div#bin'));

         //now it should drag and drop - fails
         browser.executeScript(helperfiles,elementtoDrop.getWebElement(),elementWhereToDrop.getWebElement());
         
         browser.sleep(5000);
    });
        
});


describe('Dragging and dropping for second test', ()=> {
    //browser.ignoreSynchronization=true;

    it('takes an elements and performs drag and drop', ()=> {
        browser.get('http://codef0rmer.github.io/angular-dragdrop/#!/');
        browser.sleep(5000);
        var elementtoDrop = element(by.css('[data-drag="true"]')).click();
        var elementWhereToDrop = element(by.css('[data-drop="true"]'));
        //now it should do drag and drop - fails
        browser.executeScript(helperfiles,elementtoDrop.getWebElement(),elementWhereToDrop.getWebElement());

        browser.sleep(5000);
    });
        
});


describe('Dragging and dropping for third test', ()=> {
        browser.ignoreSynchronization=true;

    it('takes an elements and performs drag and drop', ()=> {
        browser.get('https://www.w3schools.com/html/html5_draganddrop.asp');
        browser.sleep(5000);
        var elementtoDrop = element(by.css('img#drag1'));
        var elementWhereToDrop = element(by.css('div#div2'));
        //now it should do drag and drop - succeeds
        browser.executeScript(helperfiles,elementtoDrop.getWebElement(),elementWhereToDrop.getWebElement());

        browser.sleep(5000);
    });
        
});


describe('Dragging and dropping for Angular 1 application', function() {
        browser.ignoreSynchronization=true;

    it('takes an elements and performs drag and drop', ()=> {
        browser.get('https://marceljuenemann.github.io/angular-drag-and-drop-lists/demo/#/nested');
        browser.sleep(5000);
        var elementtoDrop = element(by.xpath('/html/body/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/ul/li[1]/div/div[1]/ul/li[1]/div')).click();
        var elementWhereToDrop = element(by.xpath('/html/body/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div/ul/li[4]/div'));
        //now it should do drag and drop - fails
        browser.executeScript(helperfiles,elementtoDrop.getWebElement(),elementWhereToDrop.getWebElement());
        browser.sleep(5000);
    });
        
    
});


    
    
    
