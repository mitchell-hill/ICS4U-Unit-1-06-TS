/* This program uses arrays and lists to calculate the mean, and the median.
 *
 * @author Mitchell Hill
 * @version 1.0
 * @since 2024-10-17
 */
import { readFileSync } from 'fs'

// Get the filename from the command line arguments
if (process.argv.length < 3) {
  console.error('Please provide a file path as an argument.')
  process.exit(1)
}

const filePath = process.argv[2]

// Main function
function main (): void {
  let fileContent: string

  // Read the file content
  try {
    fileContent = readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading the file:', error.message)
    return
  }

  // Split lines, convert to numbers, and filter out NaN values
  const newArray = fileContent
    .split(/\r?\n/)
    .map(line => {
      const parsedNumber = Number(line)
      return isNaN(parsedNumber) ? undefined : parsedNumber // Convert to number or undefined
    })
    .filter(num => num !== undefined) // Filter out undefined values

  // Log the numbers
  console.log('Numbers:', newArray)

  // Check if the array has valid numbers
  if (newArray.length === 0) {
    console.log('No valid numbers were found in the file.')
    return
  }

  // Calculate mean and median
  const mean = calculateMean(newArray)
  const median = calculateMedian(newArray)

  // Display results
  console.log('Mean:', mean)
  console.log('Median:', median)
  console.log('\nDone.')
}

// Function to calculate the mean
function calculateMean (numbers: number[]): number {
  let total = 0
  for (const number of numbers) {
    total += number // Ensure `number` is of type `number
  }
  return numbers.length > 0 ? total / numbers.length : 0
}

// Function to calculate the median
function calculateMedian (numbers: number[]): number {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)
  const fileNumbers = sortedNumbers.length
  const mid = Math.floor(fileNumbers / 2)
  if (fileNumbers % 2 === 0) {
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
  } else {
    return sortedNumbers[mid]
  }
}

// Run the main function
main()
