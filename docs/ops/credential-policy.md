# Credential Handling Policy — Mode B (Done-for-you)

**Scope**: Applies when a client provides live portal login credentials for Qualis Studio to edit their listing.

## Principles

1. **No persistent plaintext storage.** Credentials are used only for the duration of the edit session and are never written to disk, database, or any persistent store.
2. **Prompt revocation.** Credentials are discarded (session closed, no cached tokens) immediately after the edited listing is confirmed by the client — same business day at latest.
3. **2FA limitation.** If the portal requires 2FA, the client must either temporarily disable it or provide a one-time backup code. Qualis Studio does not store 2FA secrets.
4. **Client consent is required.** The intake form includes an explicit checkbox acknowledging this policy (see `ContactModal.astro`).
5. **No sharing.** Credentials are never shared between team members, contractors, or third parties.

## Procedure

1. Client selects "Done-for-you" mode and checks the credential consent box.
2. Credentials are received via the intake channel (WhatsApp, Drive note, or portal share link).
3. Editor logs in, performs the listing edits, logs out.
4. Client is notified that the session is complete and should rotate their password.
5. The intake message/channel entry is deleted.

## Out of scope (v1)

- Automated credential storage or vault integration.
- Multi-tenant auth system — each session is independent.
