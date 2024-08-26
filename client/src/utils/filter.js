export function filterInternships(filterData) {
  return function (internship) {
    for (const [filterKey, filterValue] of Object.entries(filterData)) {
      let passFilter = true;

      for (const [optionKey, optionValue] of Object.entries(filterValue.data)) {
        if (optionValue.checked === true) {
          switch (filterKey) {
            case 'remote':
            case 'education':
            case 'semester':
              passFilter = internship.labels.find(
                (label) =>
                  label.filter === filterKey && label.filterOption === optionKey
              );
              break;

            case 'company':
              passFilter = internship.companyName === optionValue.label;
              break;

            case 'datePosted': {
              if (optionKey === 'anyTime') {
                passFilter = true;
                break;
              }

              const date = internship.datePosted;
              const currDate = new Date();
              const diffTime = Math.abs(currDate - date);
              const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

              switch (optionKey) {
                case 'pastMonth':
                  passFilter = diffDays <= 31;
                  break;
                case 'pastWeek':
                  passFilter = diffDays <= 7;
                  break;
                case 'pastDay':
                  passFilter = diffDays <= 1;
                  break;
                default:
                  break;
              }
              break;
            }
            default:
              break;
          }
          if (passFilter) break;
        }
      }
      if (!passFilter) return false;
    }
    return true;
  };
}
