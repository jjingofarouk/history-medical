const districtOptions = {
  groupedOptions: [
    {
      label: 'Central Region',
      options: [
        { value: 'kampala', label: 'Kampala' },
        { value: 'wakiso', label: 'Wakiso' },
        { value: 'mukono', label: 'Mukono' },
        { value: 'mpigi', label: 'Mpigi' },
        { value: 'luwero', label: 'Luwero' },
      ],
    },
    {
      label: 'Eastern Region',
      options: [
        { value: 'jinja', label: 'Jinja' },
        { value: 'iganga', label: 'Iganga' },
        { value: 'mbale', label: 'Mbale' },
        { value: 'soroti', label: 'Soroti' },
      ],
    },
    {
      label: 'Northern Region',
      options: [
        { value: 'gulu', label: 'Gulu' },
        { value: 'lira', label: 'Lira' },
        { value: 'arua', label: 'Arua' },
        { value: 'kitgum', label: 'Kitgum' },
      ],
    },
    {
      label: 'Western Region',
      options: [
        { value: 'mbarara', label: 'Mbarara' },
        { value: 'kabale', label: 'Kabale' },
        { value: 'hoima', label: 'Hoima' },
        { value: 'fortportal', label: 'Fort Portal' },
      ],
    },
  ],
  clinicalInfo: 'Residence in Uganda dictates disease exposure. Kampala’s urban slums have high rates of cholera and respiratory infections. Eastern districts like Soroti face schistosomiasis from Lake Kyoga. Northern regions, recovering from conflict, show elevated mental health issues, complicating chronic disease management in resource-scarce settings.',
};

export default districtOptions;