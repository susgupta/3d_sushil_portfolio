import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('guptask.7@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>
                                Hi I'm, Sushil
                            </p>
                            <p className='grid-subtext'>
                                I am a User Experience Design Lead with both design and coding skills, with a passion to learn new technologies, and of course UI design.   
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>
                                Technology stack
                            </p>
                            <p className='grid-subtext'>
                                I focus on Javascript/Typescript, with a focus on React.  
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 43.6532,
                                    lng: -79.3832,
                                    color: 'white',
                                    size: 20,
                                    text: 'I am here!'
                                }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I can work remotely across most timezones
                            </p>
                            <p className='grid-subtext'>
                                I'm based in Canada 🇨🇦, with remote work available
                            </p>
                            <Button name="Contact me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                My passion for design and coding
                            </p>
                            <p className='grid-subtext'>
                                Designing and developing beautiful, interactive user interfaces is my passion.  
                                In my 15+ years as a designer and developer, I have turned many ideas into reality.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>
                                Contact me
                            </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                    guptask.7@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About