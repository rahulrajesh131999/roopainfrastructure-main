import { BsHouse } from "react-icons/bs";
import { LiaCoinsSolid } from "react-icons/lia";
import { LiaIndustrySolid } from "react-icons/lia";
import { BiLandscape } from "react-icons/bi";
export const homepageCards=[
    {
        id:1,
        title:'Project Management',
        icon:BsHouse,
        previewDesc:'End to end solutions - from designs to handover handling all phases. We assure 20 yrs of structural warranty for your dream home that is designed, engineered & developed by our team',
        description:(
            <div className="flex flex-col gap-3">
            <p>End to end solutions - from designs to handover handling all phases. We assure 20 yrs of 
                structural warranty for your dream home that is designed, engineered & developed by our team</p>
            <p>
                Our expertise and work strategy truly focus on quality providing a premium service crafting spaces into landmarks. <span className="underline">Our high value services are </span>:
            </p>
            <ol className="list-decimal pl-5">
                <li>3D design & walkthrough visulization</li>
                <li>Sustainable & Green building solutions</li>
                <li>Smart homes Integration</li>
                <li>Permit & legal assistance</li>
                <li>Pre construction consultation</li>
            </ol>
            </div>
        )
    },
    {
        id:2,
        title:'Design Packages',
        previewDesc:'Our team craft homes from vision of customers into reality projects with architectures elegence changing your space into beautiful structural landmarks.',
        description:(
            <div className="flex flex-col gap-3">
                <p>Our team craft homes from vision of customers into reality projects with architectures elegence changing your space into 
                    beautiful structural landmarks.
                </p>
                <p>Our designing duties starts from drafting plan, crafting structural(architecture),3D modelling enables to perceive your dream 
                    home and rectify errors and include further modifications as your home gets established as per your dream.
                </p>
                <p>
                    we also designs interior & does landscaping with our expertise in  providing luxourious aesthetic end product
                </p>
            </div>
        ),
        icon:LiaCoinsSolid
    },
    {
        id:3,
        title:'Consultation',
        previewDesc:'Our team is unique for our expert guidance in residential, commercial & industrial projects, assuring the project is structurally sound, cost-effective & compliant with regulations',
        description:(
            <div className="flex flex-col gap-3">
                <p>Our team is unique for our expert guidance in residential, commercial & industrial projects, assuring the project is structurally sound, 
                    cost-effective & compliant with regulations. Our key offerings are:</p>
                    <ul className="pl-5 list-disc list-inside">
                        <li>Structural design & planning</li>
                        <li>Cost estimation & budgeting</li>
                        <li>Project management support</li>
                        <li>Regulatory compliance & approvals (e.g. permits, laws, safety codes)</li>
                        <li>Technical supervision</li>
                    </ul>
                <p>Roopa Infrastructure is best known for our piling consultation among different builders, public works & govt. industrial projects.</p>
            </div>
        ),
        icon:LiaIndustrySolid 
    },
    {
        id:4,
        title:'Commercial Construction',
        previewDesc:'We design & execute offices, shops & commercial complexes with professional timeline, along with our expert service in fire fighting, MEP, centralized AC (HVAC), security services & other machinery equipment establishment (like solar panel) accordingly & purposefully.',
        description:(
            <div>
                <p>We design & execute offices, shops & commercial complexes with professional timeline, along with our expert service in fire fighting, MEP, centralized AC (HVAC), security services & other machinery equipment establishment (like solar panel) accordingly & purposefully.</p>
                <p>We offer you the best infrastructure matching your requirements & purpose, in the most efficient & effective design as per your vision.</p>
            </div>
        ),
        icon:BiLandscape
    }
]