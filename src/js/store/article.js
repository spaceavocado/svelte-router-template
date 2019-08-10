/**
 * Simple article store
 */

import {readable} from 'svelte/store';

/**
 * ArticlesStore class
 */
class ArticlesStore {
  /**
   * @constructor
   */
  constructor() {
    this._articles = [
      {
        id: 1,
        title: 'Accusamus persecuti delicatissimi',
        content: `Accusamus persecuti delicatissimi vis ea, vel congue altera
          partiendo at. Quo elit rationibus eu, commodo intellegat at duo.
          Mea at sumo nobis commodo, cum ex posse dicunt repudiare, at mei
          nostrud inciderint. Mel et iriure feugiat, qui te suas everti
          accusamus.`,
        published: new Date(2018, 1, 10),
        author: 'Kalyani Raghu',
      },
      {
        id: 2,
        title: 'Eos dicit solet semper ei',
        content: `Eos dicit solet semper ei. Ea stet neglegentur eos, at vix 
          debet aperiri argumentum. Eu nisl dolores philosophia est, tantas
          senserit qualisque usu ad. Ei splendide adolescens conclusionemque
          eos, vis doming option delenit ne.`,
        published: new Date(2018, 3, 15),
        author: 'Felicia Dirksen',
      },
      {
        id: 3,
        title: 'Sed persius denique scaevola ei',
        content: `Sed persius denique scaevola ei. At usu eirmod commune, eam
          ei laudem copiosae, ne suas putent nominati per. Cu latine deleniti
          sit. Eos an sint soluta, vituperata voluptatibus no sed. An sanctus
          posidonium ius. Nam ne alia utroque accumsan. Has salutatus
          neglegentur et, sensibus referrentur intellegebat eos ex, aeterno
          definitiones ad usu.`,
        published: new Date(2019, 4, 1),
        author: 'Felicia Dirksen',
      },
      {
        id: 4,
        title: 'Labore voluptaria',
        content: `Labore voluptaria elaboraret nam no. Ei dicat iudicabit 
          omittantur quo, aeterno molestie abhorreant cu cum. Erat numquam pri
          in. Quo alienum maluisset ea, at mel admodum gubergren maiestatis,
          quo et habeo congue. Ne falli malorum eos, id eirmod iisque eos.
          Nulla quodsi scripserit sit ad.`,
        published: new Date(2019, 4, 6),
        author: 'Connell Ó Deoráin',
      },
      {
        id: 5,
        title: 'Sed dicant laudem semper in',
        content: `Sed dicant laudem semper in, ipsum verterem quaestio est ut.
          Ne nec exerci consequat, pro ex falli legere qualisque. Sit vidit
          minim euripidis ne, alii dolor ius cu, no quo inani mediocrem
          adipiscing. Commune voluptaria est at, eos veri efficiantur cu, ne
          ceteros voluptatum mea. Et rebum sonet salutatus vel, ne verear
          equidem liberavisse mel. Et unum rebum quo, ut enim case ornatus
          nam.`,
        published: new Date(2019, 4, 12),
        author: 'Hanne Hyland',
      },
      {
        id: 6,
        title: 'Eum an elitr suscipiantur',
        content: `Eum an elitr suscipiantur. Sumo argumentum complectitur eos
          no. No liber doming philosophia cum, cu usu oblique fabellas
          reformidans. Ut has agam causae qualisque, quo cu ubique tibique,
          vim cu unum homero altera. Vel esse constituto ut, iisque suavitate
          scripserit eu mea.`,
        published: new Date(2019, 4, 19),
        author: 'Connell Ó Deoráin',
      },
      {
        id: 7,
        title: 'Dolor insolens ex sea',
        content: `Dolor insolens ex sea, probo suavitate qui an, eum no semper
          tincidunt. An saperet molestiae vim, ne his invenire delicata. Qui
          id iuvaret perfecto laboramus. Ne option ullamcorper vis, vel ei
          postulant dignissim.`,
        published: new Date(2019, 4, 18),
        author: 'Hanne Hyland',
      },
      {
        id: 8,
        title: 'Singulis voluptaria sea no',
        content: `Singulis voluptaria sea no, ea duis etiam cotidieque duo,
          mundi insolens nec in. Debet splendide sea cu. Mel tantas blandit
          voluptatum te. Homero ubique graeci ex eam, equidem propriae
          nominavi cu vix, pri altera gloriatur inciderint ne. Primis numquam
          comprehensam vel id, et quo sumo mentitum patrioque, an mea omnis
          etiam dolorem. Eam eu justo zril posidonium.`,
        published: new Date(2019, 4, 22),
        author: 'Kalyani Raghu',
      },
      {
        id: 9,
        title: 'Duo legere utroque ut',
        content: `Duo legere utroque ut. Stet denique no sea, sit oporteat
          facilisis consequat an, est ne decore definiebas vituperatoribus.
          Quo et unum essent veritus. Case propriae hendrerit qui ei,
          prompta prodesset liberavisse ut vim. Invenire prodesset
          appellantur ei est, impedit omittantur qui eu, ex ius officiis
          dissentiunt.`,
        published: new Date(2019, 6, 19),
        author: 'Felicia Dirksen',
      },
      {
        id: 10,
        title: 'Mea ea graeco cetero ullamcorper',
        content: `Mea ea graeco cetero ullamcorper, ea eos veritus expetenda
          appellantur. Ad eos mollis accusam consectetuer, nisl ancillae eam et,
          tibique volutpat partiendo ut qui. Id sonet nonumes mea, primis
          repudiare ad mea, ea est reque omittam. Possit saperet inimicus
          ut est.`,
        published: new Date(2019, 6, 28),
        author: 'Kalyani Raghu',
      },
    ];
  }

  /**
   * Get all articles
   * @param {object?} opts
   * @return {object[]}
   */
  list(opts) {
    opts = opts || {};

    if (opts.page && opts.pageSize) {
      const start = (opts.page-1) * opts.pageSize;
      return this._articles.slice(0)
          .sort((a, b) => b.published - a.published)
          .slice(start, start + opts.pageSize);
    } else if (opts.limit) {
      return this._articles.slice(0)
          .sort((a, b) => b.published - a.published)
          .slice(0, opts.limit);
    }
    return this._articles.slice(0)
        .sort((a, b) => b.published - a.published);
  }

  /**
   * Get article by ID
   * @param {number} id
   * @throws an error if article is not found.
   * @return {object}
   */
  get(id) {
    const article = this._articles.find((a) => a.id == id);
    if (article == undefined) {
      throw new Error('article not found');
    }
    return article;
  }

  /**
   * Total number of articles
   * @param {number} year
   * @param {number} month
   * @return {number}
   */
  total(year, month) {
    if (year && month) {
      let c = 0;
      for (const a of this._articles) {
        if (a.published.getFullYear() == year
        && a.published.getMonth() == month) {
          c++;
        }
      }
      return c;
    }
    return this._articles.length;
  }

  /**
   * Gets all archive sections
   * @return {object[]}
   */
  archive() {
    const dict = {};
    for (const a of this._articles) {
      const year = a.published.getFullYear();
      const month = a.published.getMonth();
      if (dict[year] == undefined) {
        dict[year] = [];
      }
      if (dict[year].includes(month) == false) {
        dict[year].push(month);
      }
    }
    const archive = Object.keys(dict).map((key) => {
      return [key, dict[key].sort((a, b) => b-a)];
    });
    archive.sort((a, b) => b[0] - a[0]);

    return archive;
  }
}

export default readable(new ArticlesStore());
