import {format, parseISO } from 'date-fns'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthorCard } from "./author-card"

export default function TitleBar({ title, description, authors, date}) {
    return(
        <Card className="mb-10 dark:bg-gray-800  border-card-hover">
            <CardHeader className="border-b border-card-hover pb-1">
                <CardTitle className="mt-2 scroll-m-20 text-4xl font-bold text-title tracking-tight before:content-none"> 
                    {title} 
                </CardTitle>
                <div className="flex justify-between items-center">
                    <div>Prepared by: {authors.map( (author, idx) => (
                        <AuthorCard key={idx} author={author} />
                    ))}
                    </div>
                    <div>
                        <time dateTime={date}>
                            {format(parseISO(date), 'LLLL dd, yyyy')}
                        </time>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="mt-6">
                <p>{description}</p>
            </CardContent>
        </Card>
    )
}