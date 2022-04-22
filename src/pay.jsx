import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from 'react'; 
import axios from 'axios';
const KEY = "pk_test_51KrNvTKj1uOJF8gqXIyPJpGcVoe3ERk7doxeMZvXCaRliEdj6ALJsczhNVhSIyB4DukrtxrB9xi7iNvvJeuBH60P00CqZjRF3u"
const Pay = () =>{
    const [stripeT,setstriptT] = useState(null);
    const onToken = (token) =>{
        setstriptT(token);
    };
    useEffect(()=>{
        console.log("aaa");
        const mkReq = async () =>{
            try{
               const res = await axios.post(
                   "http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeT.id,
                    amount : 2000,
                   }
                );
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        };

        stripeT && mkReq();
    },[stripeT]);
    return(
        <div>
            <StripeCheckout name="weebking" 
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67abf060-d47c-4593-9655-19533a29e467/dew31hn-9de7c080-9660-4002-9dde-14f44c7fb722.jpg/v1/fill/w_1280,h_1372,q_75,strp/sky_striker_ace___raye_by_fgo2022_dew31hn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM3MiIsInBhdGgiOiJcL2ZcLzY3YWJmMDYwLWQ0N2MtNDU5My05NjU1LTE5NTMzYTI5ZTQ2N1wvZGV3MzFobi05ZGU3YzA4MC05NjYwLTQwMDItOWRkZS0xNGY0NGM3ZmI3MjIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9BDDuVwt2SkhINfHO_QXjoRGKmEiLqboRSwuf5ltVwA"
            billingAddress
            shippingAddress
            description="buy sa ai pread"
            amount={20000}
            token={onToken}
            stripeKey={KEY}
            >
            <button>Pay now</button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;