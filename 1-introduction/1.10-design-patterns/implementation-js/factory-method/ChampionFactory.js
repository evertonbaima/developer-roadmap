const Champion = require('./Champion');
const SupportChampion = require('./SupportChampion');
const MarksmanChampion = require('./MarksmanChampion');

class ChampionFactory {
    constructor() {
        this.ROLE_SUPPORT = 'ROLE_SUPPORT';
        this.ROLE_MARKSMAN = 'ROLE_MARKSMAN';    
    }

    /**
     * @param {string} role Champion's role.
     * @returns {Champion} New champion.
     */
    summon(role) {
        switch (role) {
            case this.ROLE_SUPPORT:
                return new SupportChampion();
            case this.ROLE_MARKSMAN:
                return new MarksmanChampion();
            default:
                throw new NotSupportedException();
        }
    }
}

module.exports = ChampionFactory;