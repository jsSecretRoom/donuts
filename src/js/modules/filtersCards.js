function tabFiltr(cards, activeTab) {
    // Если активный таб - первый таб и popular: true, то происходит фильтрация
    
    if (activeTab === 0) {
        return cards;
    }
    if (activeTab === 1) {
        return cards.filter(card => card.popular === true);
    }
    if (activeTab === 2) {
        return cards.filter(card => card.newArrival === true);
    }
    if (activeTab === 3) {
        return cards.filter(card => card.classification === "Fruity");
    }
    if (activeTab === 4) {
        return cards.filter(card => card.classification === "Holiday");
    }
    if (activeTab === 5) {
        return cards.filter(card => card.classification === "Classics");
    }
    
    
    
    return cards;
}
  export default tabFiltr;