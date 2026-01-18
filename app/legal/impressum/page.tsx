export default function ImpressumPage() {
    return (
        <>
            <h1>Impressum (Legal Notice)</h1>
            <p className="lead">Information according to § 5 TMG</p>

            <h2>Company Details</h2>
            <address className="not-italic mb-8">
                <strong>Coreframe Digital Agency</strong><br />
                [Musterstraße 1]<br />
                [12345 Musterstadt]<br />
                [Germany]<br />
            </address>

            <h2>Represented by</h2>
            <p>
                [Managing Director Name]<br />
                [Partner Name]
            </p>

            <h2>Contact</h2>
            <p>
                Phone: [Phone Number]<br />
                Email: <a href="mailto:hello@coreframe.digital">hello@coreframe.digital</a>
            </p>

            <h2>Register Entry</h2>
            <p>
                Entry in the Handelsregister.<br />
                Registering Court: [Amtsgericht Musterstadt]<br />
                Registration Number: [HRB 12345]
            </p>

            <h2>VAT ID</h2>
            <p>
                Sales tax identification number according to §27 a Umsatzsteuergesetz:<br />
                <strong>[DE 123 456 789]</strong>
            </p>

            <h2>Dispute Resolution</h2>
            <p>
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
        </>
    );
}
