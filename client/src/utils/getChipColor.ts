const getChipColor = (proficieny: number) => {
    if (proficieny === 1) {
        return 'custom.chip.green'
    } else if (proficieny === 2) {
        return 'custom.chip.yellow'
    } else if (proficieny === 3) {
        return 'custom.chip.blue'
    }
}

export default getChipColor;