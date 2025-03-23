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

/*
 * Function that takes in the current filter data and the key of one filter to be checked to true
 */
export const mutateFilterData = (allFilterData, filterLabel, key) => {
  // Create a new object with all options set to false
  const updatedData = Object.keys(allFilterData[filterLabel].data).reduce(
    (acc, optionKey) => ({
      ...acc,
      [optionKey]: {
        ...allFilterData[filterLabel].data[optionKey],
        checked: optionKey === key, // true only for the target key, false for all others
      },
    }),
    {}
  );

  return {
    ...allFilterData,
    [filterLabel]: {
      ...allFilterData[filterLabel],
      data: updatedData,
    },
  };
};
