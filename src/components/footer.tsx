export default function Footer() {
    const date = new Date()
    return (
        <footer className="py-10" id="contact">
            <div className="flex flex-col items-center gap-6 text-sm text-center">
                <p className="text-semibold text-muted-foreground">© Prabin Moktan</p>
            </div>
        </footer>
    );
}
