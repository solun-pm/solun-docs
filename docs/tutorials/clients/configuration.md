---
sidebar_position: 1
---

# Configuration Infos

In the network of solun we maintain a so-called IMAP server, which allows you to read your e-mails from anywhere in the world with the help of an IMAP-enabled mail client. The big advantage of an IMAP server in contrast to the more commonly used POP servers is that your mails remain stored on the server and are thus available to you independently of your computer or home area.


For the security of your e-mail and password, our IMAP server supports encryption via SSL as well as TSL. With encryption, both the login data (username and password) and the e-mails themselves are transmitted in encrypted form between your mail client and the mail server. A non-encrypted access to the IMAP server is no longer possible for security reasons.

During the first encrypted access via , Mozilla Thunderbird, Outlook or various other mail clients, your mail client may tell you that it cannot confirm the server's security certificate because the certification authority is unknown to it. Tell your mail client to import this certificate or to remember the certificate permanently.


## Configuration summary

E-mail address: Your regular username followed by your domain for example "@solun.pm".

User / Password: your regular username and password

## Protocol outgoing mail server: SMTP

Outgoing mail server: ms.solun.pm
SMTP-Port: 465
Security: SSL/TLS
Method: password normal
Protocol incoming mail server: IMAP

Incoming mail server: ms.solun.pm
IMAP-Port: 993
Security: SSL/TLS
Method: password normal

## Configuration of single programs

[Mozilla Thunderbird](/docs/tutorials/clients/thunderbird)