import Link from 'next/link';
import { useBreedImageURI } from '../helpers/dogapi'
import styles from './BreedCard.module.css';

function BreedCardImage({ breed }) {

    const { imageURI, isLoading, isError } = useBreedImageURI(breed);

    if (isLoading) return <></>;
    if (isError) return <></>;

    return (
        <div className={styles.container}>
            <Link href={'/breeds/' + breed}>
                <img
                    src={imageURI}
                    alt={breed}
                    className='rounded-circle shadow'
                />
            </Link> 
        </div>
    );
}

export default function BreedCard({ breed }) {
    return (
        <figure className="figure col-sm-6 col-md-4 col-lg-3 g-5">
            <BreedCardImage breed={breed} />
            <figcaption className="text-capitalize fs-4 text-center my-4">{breed}</figcaption>
        </figure>

    );
}
