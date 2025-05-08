const maritalStatusOptions = {
  options: [
    { value: 'single', label: 'Single' },
    { value: 'cohabiting', label: 'Cohabiting' },
    { value: 'betrothed', label: 'Betrothed (Engaged)' },
    { value: 'married', label: 'Married (Civil/Religious)' },
    { value: 'separated', label: 'Separated' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' },
    { value: 'polygamous', label: 'Polygamous Union' },
  ],
  clinicalInfo: 'Marital status in Uganda influences psychosocial health. Polygamous unions, common in northern regions, increase HIV transmission risks due to multiple partners. Widowed or separated patients may suffer from depression or malnutrition, particularly in rural areas with limited social safety nets, affecting adherence to antihypertensive or antiretroviral therapy.',
};

export default maritalStatusOptions;