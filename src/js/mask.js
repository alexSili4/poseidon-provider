import Inputmask from 'inputmask';
import refs from './refs';

Inputmask({ mask: '+380 99 999 9999', clearMaskOnLostFocus: false, placeholder: '' }).mask(refs.phoneInput);
