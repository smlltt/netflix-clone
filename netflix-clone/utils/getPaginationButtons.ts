const getPaginationButtons = (
  totalResults: number,
  currentPage: number,
  itemsPerPage: number
): { showPrevious: boolean; showNext: boolean } => {
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;
  return { showPrevious, showNext };
};

export default getPaginationButtons;
