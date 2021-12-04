/* eslint-disable no-unused-expressions */

import Isotope from '../../node_modules/isotope-layout/js/isotope';

const elem = document.getElementById('projekte-grid')
const iso = new Isotope(elem, {
  itemSelector: '#filter-item',
  layoutMode: 'fitRows',
});

const fiterItem = Array.from(document.getElementsByClassName('filter-bar__filter-link'))

fiterItem.forEach(el => {
  el.addEventListener('click', e => {
    const { filter } = e.currentTarget.dataset;
    iso.arrange({ filter: `${filter}` })

    fiterItem.forEach(item => {
      item !== e.target ? item.classList.remove('is-active') : item.classList.add('is-active')
    })
  })
})

const fachpartnerGrid = document.getElementById('fachpartner-grid')
const qwe = new Isotope(fachpartnerGrid, {
  itemSelector: '#filter-item',
  layoutMode: 'fitRows',
});

const fiterItems = Array.from(document.getElementsByClassName('filter-control-bar-wrapper__filter-control'))

fiterItems.forEach(el => {
  el.addEventListener('click', e => {
    const { filter } = e.currentTarget.dataset;
    qwe.arrange({ filter: `${filter}` })

    fiterItem.forEach(item => {
      item !== e.target ? item.classList.remove('is-active') : item.classList.add('is-active')
    })
  })
})
