const tribeOptions = {
  groupedOptions: [
    {
      label: 'Bantu Groups',
      options: [
        { value: 'baganda', label: 'Baganda' },
        { value: 'banyankole', label: 'Banyankole' },
        { value: 'bakiga', label: 'Bakiga' },
        { value: 'basoga', label: 'Basoga' },
        { value: 'bagisu', label: 'Bagisu' },
        { value: 'banyoro', label: 'Banyoro' },
        { value: 'batooro', label: 'Batooro' },
        { value: 'banyarwanda', label: 'Banyarwanda' },
        { value: 'bakonjo', label: 'Bakonjo' },
      ],
    },
    {
      label: 'Nilotic Groups',
      options: [
        { value: 'acholi', label: 'Acholi' },
        { value: 'langi', label: 'Langi' },
        { value: 'alur', label: 'Alur' },
        { value: 'jopadhola', label: 'Jopadhola' },
        { value: 'iteso', label: 'Iteso' },
        { value: 'kumam', label: 'Kumam' },
      ],
    },
    {
      label: 'Other Groups',
      options: [
        { value: 'lugbara', label: 'Lugbara' },
        { value: 'madi', label: 'Madi' },
        { value: 'kakwa', label: 'Kakwa' },
        { value: 'other', label: 'Other' },
      ],
    },
  ],
  clinicalInfo: 'Ethnicity/tribe may indicate genetic predispositions to certain conditions (e.g., sickle cell anemia in specific groups) and cultural practices affecting health.',
};

export default tribeOptions;