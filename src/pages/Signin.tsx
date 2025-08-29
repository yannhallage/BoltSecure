import NavbarComponentLanding from "@/components/pages/Navbar";
import SectionOtherSignin from "@/components/pages/signin/SectionOtherSignin";


const Signin = () => {
    return (
        <>
            <header>
                <NavbarComponentLanding />
            </header>
            <section className="h-screen flex justify-center items-center">
                <div className=" w-full h-full">
                    {/* <h1 className="text-2xl font-bold">Sign In</h1> */}
                    <SectionOtherSignin />
                </div>
            </section>
        </>
    )
}
export default Signin;