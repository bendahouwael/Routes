import express from 'express';
const router  = express.Router();
const api='https://tech.dev.ats-digital.com/api/products?size=100';
async function getdata()
{
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
}

router.get ('/', (req,res) =>
{
    res.send('Les produit');
    
    
});
router.get ('/id', (req,res) =>
{
    res.send('Les l id');
});

export default router;
