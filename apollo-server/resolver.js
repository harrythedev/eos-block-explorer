import Eos from "eosjs"

const eos = Eos.Localnet()

const resolvers = {
  Query: {
    block: async () => {
      try {
        const blockInfo = await eos.getInfo({ })
        const block = await eos.getBlock(blockInfo.head_block_num)
        return block
      } catch (e) {
        console.error(e)
      }
    },
    blocks: async () => {
      try {
        let blocks = []
        const blockInfo = await eos.getInfo({ })
        const blockNumber = blockInfo.head_block_num
        if (blockNumber < 10) { // only if blockNumber is less than 10
          for (let i = 1; i < blockNumber + 1; i++) {
            let block = await eos.getBlock(i)
            blocks.unshift(block)
          }
        } else { // normal iteration
          for (let i = blockNumber; i > blockNumber - 10; i--) {
            let block = await eos.getBlock(i)
            blocks.push(block)
          }
        }
        console.log('BLOCKS!!!',blocks.length, blocks);
        return blocks
      } catch (e) {
        console.error(e)
      }
    }
  },
}

export default resolvers