import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)':'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {

    query = input('app')

    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor(){
        // console.log('sssss')
    }

    onConfirmLeavePage(event: MouseEvent) {
        const leave = window.confirm('leave the app ?')
        if (leave) {
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = `${address}?from=${this.query()}`

            return
        }

        event?.preventDefault()
    }
}