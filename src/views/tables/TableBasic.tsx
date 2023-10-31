// ** MUI Imports
import React, {useEffect, useState} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { searchCoins } from 'src/api/api'
import { Pair } from 'src/configs/PairType'
import { CoinType } from 'src/configs/PairType'


const columns = ["Pair Name", "Liquidity", "Volume", "Price", "24H Price Change", "FDV"];

const TableBasic = () => {

  const [coins, setCoins] = useState<CoinType[]>([]);

useEffect(() => {
  const fetchCoins = async () => {
    const response = await searchCoins("WETH USDC LINK USDT");
    const fetchCoins: Pair[] = response?.pairs;
    console.log("fetchCoins--", fetchCoins)
    const rows: CoinType[] = fetchCoins?.map((fetchCoin) => {
      return {
        name: `${fetchCoin.baseToken.symbol}/${fetchCoin.quoteToken.symbol}`,
        liquidity: fetchCoin.liquidity?.usd,
        volume: fetchCoin.volume.h24,
        price: fetchCoin.priceUsd,
        priceChange: fetchCoin.priceChange.h24,
        fdv: fetchCoin.fdv
      };
    });
    rows.sort((a, b) => {
      if(a.liquidity && b.liquidity) {
        return -(a.liquidity - b.liquidity);
      }

      return 0;
    });
    setCoins(rows || []);
  };
  fetchCoins();
  const interval = setInterval(() => {
    console.log("fetchcoins")
    fetchCoins();
  }, 1800000);

  return () => {
    if(interval) {
      clearInterval(interval);
    }
  }
}, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, maxHeight: 500 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((row, index) => {

            const keyName = row.name + "-" + index;

            return(
            <TableRow
              key={keyName}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='left'>{row.liquidity}</TableCell>
              <TableCell align='left'>{row.volume}</TableCell>
              <TableCell align='left'>{row.price}</TableCell>
              <TableCell align='left'>{row.priceChange}</TableCell>
              <TableCell align='left'>{row.fdv}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
