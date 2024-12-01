import { ReactNode } from "react";

//Headingコンポーネントに渡されるpropsの型を定義
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    title?: string;
    className?: string;
    children: ReactNode; //コンポーネントの子要素。見出しタグ内に表示する内容
}

function Heading(props: HeadingProps){
    const {level, title, className, children, ...restProps} = props; //{...restProps}は、HTMLAttributes<HTMLHeadingElement>で受け取ったその他の属性（id、styleなど）を展開して渡します。
    const validHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    // levelがvalidHeadingTagsに含まれていればそのタグを使用、含まれていなければデフォルトで'h1'タグ
    const HeadingTag = level && validHeadingTags.includes(level) ? level : 'h1';
    const headingClasses = {
        h1: 'text-3xl font-bold my-4',
        h2: 'text-2xl font-bold my-4',
        h3: 'text-xl font-bold my-3',
        h4: 'text-lg font-bold my-3',
        h5: 'text-md font-bold my-2',
        h6: 'text-base font-bold my-2',
    }

    //もしchildrenが渡されていればそれを表示し、渡されていなければtitleが表示
    return (
        <>
            <HeadingTag className={`${headingClasses[HeadingTag]} ${className}`}{...restProps}>
                {children || title}
            </HeadingTag>
        </>
    )
}

export default Heading;