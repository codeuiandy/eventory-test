const Sort = (data, getLabel) =>
  data?.sort((a, b) =>
    getLabel(a) > getLabel(b) ? 1 : getLabel(b) > getLabel(a) ? -1 : 0
  );

export default Sort;
