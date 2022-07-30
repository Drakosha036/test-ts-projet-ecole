export class Table {
    /**
     * 
     * @param {string} element 
     * @returns HTML Element 
     */
    public buildHtmlElement = (element, parent, value) => {
        //traiter les parametres
        if (parent === undefined) {
            //2.Create a td element 
            return document.createElement(element);
        } else {
            //je dois creer l'element, mais je dois aussi l'ajouter a son parent
            //2.Create a td element 
            const htmlEl = document.createElement(element);
            //7. Append the brand new  td to parent tr
            parent.appendChild(htmlEl);
            //and write id info
            htmlEl.innerHTML = value;
            return htmlEl;
        }
    
}
    
}