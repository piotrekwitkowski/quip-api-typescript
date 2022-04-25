import axios from "axios";
import { QuipClient, EditADocumentLocation } from ".";

jest.mock("axios");
const axiosMock = axios as jest.Mocked<typeof axios>;
axiosMock.get.mockResolvedValue({ data: {} })
axiosMock.post.mockResolvedValue({ data: {} })

describe('library', () => {
  const client = new QuipClient('');

  it('exports a client object', () => {
    expect(client).toBeDefined();
  });

  it('exports apis', () => {
    expect(client).toHaveProperty('threads');
    expect(client).toHaveProperty('users');
  });

  it('calls axios for GET requests', () => {
    client.threads.getThreadHtmlV2({ id: '' });
    expect(axiosMock.get).toBeCalled();
  });

  it('calls axios for POST requests', () => {
    client.threads.createADocumentOrSpreadsheet({ body: { content: '' } });
    expect(axiosMock.post).toBeCalled();
  });

  it('exports enums', () => {
    const enumOption = EditADocumentLocation.APPEND;
    expect(enumOption).toBeDefined();
  });

});
