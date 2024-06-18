import classNames from 'classnames'

function Skeleton({ times,className }: any){
    const outerClassName = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rouned',
        'mb-2.5',
        className
    );
    
    const innerClassName = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200',
        className
    );

    const boxes:any = Array(times)
        .fill(0)
        .map((_,i) => {
        return (
            <div key={i} className={outerClassName}>
                <div className={innerClassName} />
            </div>
        )
    })

    
    return boxes    
}

export default Skeleton;