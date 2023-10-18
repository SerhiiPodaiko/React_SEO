const SkeletonUI = ({ count }) => (
    <p className='placeholder-glow'>
        <span className={`placeholder col-${count}`}></span>
    </p>
)

export default SkeletonUI