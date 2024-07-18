function formatValue({ e, firstSymbol }) {
  const { value } = e.target;
  const isTargetFirstSymbol = value.startsWith(firstSymbol);

  if (!isTargetFirstSymbol) {
    e.target.value = `${firstSymbol}${value}`;
  }
}

export default formatValue;
